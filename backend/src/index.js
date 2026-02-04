require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./db");
const promptRoutes = require("./routes/promptRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// CORS Configuration
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://webcrawler-8ybq.onrender.com",
    "https://web-crawler-ten.vercel.app/"
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static images
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/api/prompts", promptRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "AI Prompts API is running",
    status: "active",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
