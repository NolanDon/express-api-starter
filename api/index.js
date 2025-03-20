const express = require('express');

// const emojis = require('./emojis');

const router = express.Router();


router.use(middlewares.notFound);
router.use(middlewares.errorHandler);

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏 nolan',
  });
});

router.get('/emojis', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});


module.exports = router;
