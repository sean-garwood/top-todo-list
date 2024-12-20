import
export default class ValidationError extends Error {
  constructor(message) {
    super(getFullErrorMessage());
    this.name = getFullErrorName();
    this.type = getErrorType();
  }


}
