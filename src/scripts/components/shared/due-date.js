import DateValidator from 'Validators/date-validator';
export default class DueDate {
  constructor(dueDate) {
    const validationError = DateValidator.validate(dueDate);
    validationError ? this.error = validationError : this.dueDate = dueDate;
  }
};
