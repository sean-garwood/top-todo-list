export default class Validatable {
  constructor(value, validator) {
    const validationError = validator(value);
    this.isValid = validationError === null;
    this.isValid ? this.value = value : this.error = validationError;
  }
}
