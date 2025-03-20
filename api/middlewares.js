const allowedOrigins = ['https://techden.io'];

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

const refererCheck = (req, res, next) => {
  const referer = req.headers.referer;
  if (!referer || !referer.startsWith(allowedOrigins[0])) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
};

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}

function originAuth(req, res, next) {
  const origin = req.headers.origin;

  if (!allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: "Unauthorized" });
  }
  next();
};

module.exports = {
  notFound,
  errorHandler,
  refererCheck,
  originAuth
};
