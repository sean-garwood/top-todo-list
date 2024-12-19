export default class TodoItemDueDate {
  constructor(dueDate) {
    this.dueDate = this._validate(dueDate);
  }

  _validate(dueDate) {
    if (!(dueDate instanceof Date)) {
      throw new Error('The due date is invalid.');
    }
    else if (dueDate < new Date()) {
      throw new Error('The due date is in the past.');
    }

    return dueDate;
  }
};
