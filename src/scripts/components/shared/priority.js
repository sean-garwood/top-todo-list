import Validatable from './validatable.js';
import PriorityValidator from '../../utils/priority-validator.js';

export default class Priority extends Validatable {
  constructor(priority) {
    super(priority, (value) => PriorityValidator.validate(value, 'Priority'));
  }

  get priority() { return this.value; }
}
