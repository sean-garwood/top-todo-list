import Validatable from './validatable';
import TextValidator from 'Validators/text-validator';
export default class Title extends Validatable {
  constructor(title) {
    super(title, (value) => TextValidator.validate(value, 'Title'));
  }

  get title() { return this.value; }
}
