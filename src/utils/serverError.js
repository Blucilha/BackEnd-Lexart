const serverError = {
    internalServerError: (message) => ({
        statusCode: 500,
        error: 'Internal server error',
        message,
    }),
};
  
module.exports = serverError;