export default class Validatable {
  constructor(value, validator) {
    const validationError = validator(value);
    this.isValid = validationError === null;
    if (this.isValid) {
      this.value = value;
    } else this.error = validationError;
  }
}
