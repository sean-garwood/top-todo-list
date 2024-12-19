import LengthLimits from '../../constants/length-limits';

export default class TodoItemDescription {
  constructor(description) {
    this.description = this._validate(description);
  }

  _validate(description) {
    if (description.length < LengthLimits.TodoItemDescription.min) {
      throw new Error('The description is too short.');
    }

    if (description.length > LengthLimits.TodoItemDescription.max) {
      throw new Error('The description is too long.');
    }

    return description;
  }
};
