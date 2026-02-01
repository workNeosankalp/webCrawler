const puppeteer = require("puppeteer");
const Prompt = require("../models/prompts");
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

// Function to download image and save locally
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    // Validate URL
    if (!url || !url.startsWith("http")) {
      reject(new Error("Invalid URL"));
      return;
    }

    const protocol = url.startsWith("https") ? https : http;

    const request = protocol.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);

        fileStream.on("finish", () => {
          fileStream.close();
          resolve(filepath);
        });

        fileStream.on("error", (err) => {
          fs.unlink(filepath, () => {}); // Delete partial file
          reject(err);
        });
      } else {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
      }
    });

    request.on("error", (err) => {
      reject(err);
    });

    request.setTimeout(10000, () => {
      request.destroy();
      reject(new Error("Request timeout"));
    });
  });
};

// Get file extension from URL
const getFileExtension = (url) => {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const ext = path.extname(pathname).toLowerCase();

    // Check if valid image extension
    const validExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
    if (validExtensions.includes(ext)) {
      return ext.substring(1); // Remove the dot
    }

    // Default to jpg if no extension found
    return "jpg";
  } catch (error) {
    return "jpg";
  }
};

const scrapePrompts = async () => {
  let browser;

  try {
    console.log("🚀 Launching browser...");

    // Create images directory if it doesn't exist
    const imagesDir = path.join(__dirname, "../../public/images");
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
      console.log("📁 Created images directory");
    }

    browser = await puppeteer.launch({
      headless: true, // Changed to true for background operation
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--disable-gpu",
      ],
    });

    const page = await browser.newPage();

    // Set viewport for consistent rendering
    await page.setViewport({ width: 1280, height: 800 });

    console.log("📡 Navigating to website...");
    await page.goto("https://gemini-prompts.vercel.app", {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    console.log("🔍 Looking for 'Browse all prompts' button...");
    await page.waitForSelector("button", { timeout: 15000 });

    // Click the button
    const buttonClicked = await page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll("button")).find((b) =>
        b.innerText.toLowerCase().includes("browse all prompts"),
      );

      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });

    if (!buttonClicked) {
      throw new Error("'Browse all prompts' button not found");
    }

    console.log("✅ Button clicked, waiting for content...");

    // Wait for content to load
    await page.waitForSelector("p", { timeout: 15000 });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("📜 Scrolling to load all prompts...");

    // Scroll to load all content
    await page.evaluate(async () => {
      for (let i = 0; i < 10; i++) {
        window.scrollBy(0, window.innerHeight);
        await new Promise((r) => setTimeout(r, 1000));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 1000));
    });

    console.log("🔎 Extracting prompts and images...");

    // Extract prompts with their associated images
    const promptsData = await page.evaluate(() => {
      const results = [];

      // Try to find prompt containers
      const containers = document.querySelectorAll(
        'div[class*="card"], div[class*="prompt"], div[class*="item"]',
      );

      containers.forEach((container) => {
        // Get prompt text
        const promptParagraph = container.querySelector("p");
        const promptText = promptParagraph?.innerText?.trim();

        // Get image
        const img = container.querySelector("img");
        let imageUrl = null;

        if (img) {
          imageUrl =
            img.src ||
            img.getAttribute("data-src") ||
            img.getAttribute("srcset")?.split(" ")[0];
        }

        // Get title
        const title = container
          .querySelector("h2, h3, h4, h5, h6")
          ?.innerText?.trim();

        if (promptText && promptText.length > 100 && promptText.length < 2000) {
          results.push({
            prompt: promptText,
            imageUrl: imageUrl,
            title: title || null,
            sourceUrl: window.location.href,
          });
        }
      });

      // Fallback method if structured approach doesn't work
      if (results.length === 0) {
        const allParagraphs = Array.from(document.querySelectorAll("p"));

        allParagraphs.forEach((p, index) => {
          const text = p.innerText.trim();

          if (
            text.length > 100 &&
            text.length < 2000 &&
            (text.startsWith("Generate") ||
              text.startsWith("Take") ||
              text.startsWith("Create") ||
              text.startsWith("Write") ||
              text.startsWith("An ") ||
              text.startsWith("A ") ||
              text.startsWith("Develop") ||
              text.startsWith("Design") ||
              text.startsWith("Build") ||
              text.startsWith("Explain"))
          ) {
            // Try to find nearest image
            let imageUrl = null;
            let parent = p.parentElement;

            // Search up the DOM tree for an image
            for (let i = 0; i < 5; i++) {
              if (parent) {
                const img = parent.querySelector("img");
                if (img) {
                  imageUrl = img.src || img.getAttribute("data-src");
                  break;
                }
                parent = parent.parentElement;
              }
            }

            results.push({
              prompt: text,
              imageUrl: imageUrl,
              title: null,
              sourceUrl: window.location.href,
            });
          }
        });
      }

      return results;
    });

    console.log(`✨ Prompts found: ${promptsData.length}`);

    if (promptsData.length === 0) {
      console.log(
        "⚠️  No prompts found. Check if the website structure changed.",
      );
      await browser.close();
      return;
    }

    // Remove duplicates
    const uniquePrompts = promptsData.filter(
      (prompt, index, self) =>
        index === self.findIndex((p) => p.prompt === prompt.prompt),
    );

    console.log(`🔄 Unique prompts: ${uniquePrompts.length}`);

    // Check existing prompts in database
    const existingPrompts = await Prompt.find({
      prompt: { $in: uniquePrompts.map((p) => p.prompt) },
    });

    const existingPromptTexts = new Set(existingPrompts.map((p) => p.prompt));
    const newPrompts = uniquePrompts.filter(
      (p) => !existingPromptTexts.has(p.prompt),
    );

    console.log(`📥 New prompts to save: ${newPrompts.length}`);

    if (newPrompts.length > 0) {
      const promptsWithLocalImages = [];
      let successfulDownloads = 0;

      for (let i = 0; i < newPrompts.length; i++) {
        const promptData = newPrompts[i];
        let localImagePath = null;

        if (promptData.imageUrl && promptData.imageUrl.startsWith("http")) {
          try {
            // Get proper file extension
            const extension = getFileExtension(promptData.imageUrl);
            const imageName = `prompt_${Date.now()}_${i}.${extension}`;
            const imagePath = path.join(imagesDir, imageName);

            console.log(
              `📷 Downloading image ${i + 1}/${newPrompts.length}...`,
            );
            await downloadImage(promptData.imageUrl, imagePath);

            // Store relative path for serving
            localImagePath = `/images/${imageName}`;
            successfulDownloads++;
            console.log(`✅ Image saved: ${imageName}`);
          } catch (error) {
            console.error(
              `❌ Failed to download image ${i + 1}: ${error.message}`,
            );
            // Continue without image
          }
        }

        promptsWithLocalImages.push({
          prompt: promptData.prompt,
          title: promptData.title,
          sourceUrl: promptData.sourceUrl,
          imageUrl: localImagePath,
        });
      }

      await Prompt.insertMany(promptsWithLocalImages);
      console.log(`✅ ${newPrompts.length} new prompts saved to MongoDB`);
      console.log(`📷 ${successfulDownloads} images downloaded successfully`);
    } else {
      console.log("ℹ️  All prompts already exist in database");
    }

    await browser.close();
    console.log("🎉 Scraping completed successfully!");
  } catch (error) {
    console.error("❌ Error during scraping:", error.message);
    console.error(error.stack);

    if (browser) {
      await browser.close();
    }

    throw error;
  }
};

module.exports = scrapePrompts;
