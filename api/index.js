const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares');
const router = express.Router();

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

router.use(middlewares.notFound);
router.use(middlewares.errorHandler);

module.exports = router;


// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   /* eslint-disable no-console */
//   console.log(`Listening: http://localhost:${port}`);
//   /* eslint-enable no-console */
// });
