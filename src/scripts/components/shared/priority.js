import Priorities from '../../constants/priorities';
export default class Priority {
  constructor(priority) {
    this.priority = this._validate(priority);
  }

  _validate(priority) {
    if (!Object.values(Priorities).includes(priority)) {
      throw new Error('The priority is invalid.');
    }
    return priority;
  }
}
