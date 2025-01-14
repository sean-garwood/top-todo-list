import TextValidator from 'Validators/text-validator';
export default class Description {
  constructor(description) {
    const validationError = TextValidator.validate(description, 'Description');
    validationError ? this.error = validationError : this.description = description;
  }
};
