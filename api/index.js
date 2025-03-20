const express = require('express');

// const emojis = require('./emojis');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏 nolan',
  });
});

router.get('/emojis', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});


module.exports = router;
