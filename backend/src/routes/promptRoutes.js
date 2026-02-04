const express = require("express");
const router = express.Router();
const Prompt = require("../models/prompts");

// GET all prompts
router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 0; 
    const prompts = await Prompt.find().sort({ createdAt: -1 }).limit(limit);
    res.json(prompts);
  } catch (error) {
    console.error("Error fetching prompts:", error);
    res.status(500).json({ error: "Failed to fetch prompts" });
  }
});

// GET single prompt by ID
router.get("/:id", async (req, res) => {
  try {
    const prompt = await Prompt.findById(req.params.id);
    if (!prompt) {
      return res.status(404).json({ error: "Prompt not found" });
    }
    res.json(prompt);
  } catch (error) {
    console.error("Error fetching prompt:", error);
    res.status(500).json({ error: "Failed to fetch prompt" });
  }
});

module.exports = router;
