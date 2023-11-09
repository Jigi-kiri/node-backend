class ApiHandler extends Error {
  constructor(
    statusCode,
    message = "Something went wrong.",
    errors = [],
    statck = ""
  ) {
    super(message);
    this.message = message;
    this.errors = errors;
    this.data = null;
    this.statusCode = statusCode;
    this.success = false;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiHandler };
