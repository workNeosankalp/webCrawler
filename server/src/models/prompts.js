const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema(
  {
    title: String,
    prompt: String,
    category: String,
    tags: [String],
    sourceUrl: String,
    imageUrl: String, 
  },
  { timestamps: true },
);

module.exports = mongoose.model("Prompt", promptSchema);
