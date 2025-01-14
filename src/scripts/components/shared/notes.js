import TextValidator from 'Validators/text-validator';
export default class Notes {
  constructor(notes) {
    const validationError = TextValidator.validate(notes, 'Notes');
    validationError ? this.error = validationError : this.notes = notes;
  }
}
