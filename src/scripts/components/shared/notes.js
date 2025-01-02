import TextValidator from '../../utils/text-validator.js';
export default class Notes {
  constructor(notes) {
    const validationError = TextValidator.validate(notes, 'Notes');
    validationError ? this.error = validationError : this.notes = notes;
  }
}
