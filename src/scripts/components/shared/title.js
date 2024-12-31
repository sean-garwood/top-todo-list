import TextValidator from '../../utils/text-validator';
export default class Title {
  constructor(title) {
    const validationError = TextValidator.validate(title, 'Title');
    validationError ? this.error = validationError : this.title = title;
  }
}
