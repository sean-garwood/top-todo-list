import Validatable from './validatable';
import PriorityValidator from 'Utils/priority-validator';

export default class Priority extends Validatable {
  constructor(priority) {
    super(priority, (value) => PriorityValidator.validate(value, 'Priority'));
  }

  get priority() { return this.value; }
}
