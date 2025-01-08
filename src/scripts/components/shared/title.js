import Validatable from './validatable.js';
import TextValidator from 'Utils/text-validator.js';
export default class Title extends Validatable {
  constructor(title) {
    super(title, (value) => TextValidator.validate(value, 'Title'));
  }

  get title() { return this.value; }
}
