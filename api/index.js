const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares');
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;

const router = express.Router();

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

// Secure HTTP headers
router.use(helmet());

// Configure CORS to only allow techden.io
const corsOptions = {
  origin: 'https://techden.io',
  optionsSuccessStatus: 200,
};
router.use(cors(corsOptions));

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏 nolan',
  });
});

router.get('/emojis', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});

router.get("/sign-upload", (req, res) => {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const folder = "techden";
    const params = { folder, timestamp };
    const signature = cloudinary.utils.api_sign_request(params, process.env.CLOUDINARY_API_SECRET);

    if (!process.env.CLOUDINARY_CLOUD_NAME) {
      throw new Error("Cloudinary cloud name is missing in environment variables.");
    }

    res.json({
      signature,
      timestamp,
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      folder // Cloudinary folder to target
    });
  } catch (error) {
    console.error("Error signing upload request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.use(middlewares.notFound);
router.use(middlewares.errorHandler);

module.exports = router;