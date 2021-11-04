const handlerError = (err, _req, res, _next) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
      message: err.message || err.error || 'Internal server error',
    });
  };
  
module.exports = handlerError;
