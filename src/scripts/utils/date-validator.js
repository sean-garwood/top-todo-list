export default class DateValidator {
  static validate(date) {
    const baseErrorMessage = `Invalid date: ${date}\n`;

    if (!Date.parse(date)) {
      return `${baseErrorMessage}Please enter a valid date.`;
    }
    else if (new Date(date) < new Date()) {
      return `${baseErrorMessage}The date is in the past.`;
    }
    else return null;
  }
}
// TODO: validate that the todo-item due date is before the todo-list due date
