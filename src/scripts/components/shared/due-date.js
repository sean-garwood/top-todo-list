export default class DueDate {
  constructor(dueDate) {
    if (!(dueDate instanceof Date)) {
      dueDate = new Date(dueDate);
    }
    this.dueDate = this._validate(dueDate);
  }

  _validate(dueDate) {
    if (dueDate < new Date()) {
      throw new Error('The due date is in the past.');
    }

    return dueDate;
  }
};
