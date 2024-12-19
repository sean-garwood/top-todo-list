import LengthLimits from '../../constants/length-limits';

export default class TodoItemTitle {
  constructor(title) {
    this.title = this._validate(title);
  }

  _validate(title) {
    if (title.length < LengthLimits.TodoItemTitle.min) {
      throw new Error('The title is too short.');
    }

    if (title.length > LengthLimits.TodoItemTitle.max) {
      throw new Error('The title is too long.');
    }

    return title;
  }
}
