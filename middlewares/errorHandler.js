import ErrorResponse from "../utils/errorResponse.js";

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  /**
   * @Log to console for dev
   * console.log(err);
   */

  /**
   * Mongoose bad ObjectId
   */
  if (err.name === "CastError") {
    const message = `Resource not found`;
    error = new ErrorResponse(message, 404);
  }

  /**
   * Mongoose duplicate key
   */

  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  /**
   * Mongoose validation error
   */
  if (err.name === "ValidationError") {
    error = new ErrorResponse(err.message || "ValidationError", 400);
  }

  /**
  * Invalid Credentials 
  */
  if (error.message == "Request failed with status code 401") {
    error = new ErrorResponse("Please check Username/Password.", 401);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

export { errorHandler };
