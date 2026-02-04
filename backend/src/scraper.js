require("dotenv").config();
const connectDB = require("./db");
const scrapePrompts = require("./crawler/scrapePrompts");

(async () => {
  try {
    console.log("🕷️  Starting web scraper...");
    await connectDB();
    await scrapePrompts();
    console.log("✅ Scraping completed!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Scraping failed:", error);
    process.exit(1);
  }
})();
