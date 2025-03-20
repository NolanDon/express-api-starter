// server.js
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables for local development
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Import the router containing your endpoints
const apiRouter = require('./index.js');

// Mount the router on the /api path
app.use('/', apiRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
