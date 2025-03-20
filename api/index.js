const express = require('express');
const middlewares = require('./middlewares');
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


// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   /* eslint-disable no-console */
//   console.log(`Listening: http://localhost:${port}`);
//   /* eslint-enable no-console */
// });
