import DateValidator from '../../utils/date-validator.js';
export default class DueDate {
  constructor(dueDate) {
    const validationError = DateValidator.validate(dueDate);
    validationError ? this.error = validationError : this.dueDate = dueDate;
  }
};
