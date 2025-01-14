import DateValidator from "Validators/date-validator";
export default class DueDate {
  constructor(dueDate) {
    const validationError = DateValidator.validate(dueDate);
    if (validationError) {
      this.error = validationError;
    } else this.dueDate = dueDate;
  }
}
