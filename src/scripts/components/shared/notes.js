import TextValidator from 'Validators/text-validator';
export default class Notes {
  constructor(notes) {
    const validationError = TextValidator.validate(notes, 'Notes');
    if (validationError) {
      this.error = validationError;
    } else this.notes = notes;
  }
}
