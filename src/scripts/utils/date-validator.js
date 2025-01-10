// TODO: validate that the todo-item due date is before the todo-list due date
export default class DateValidator {
  static validate(date) {
    const baseErrorMessage = `Invalid date: ${date}\n`;

    if (!Date.parse(date)) {
      const fullMessage = `${baseErrorMessage}Please enter a valid date.`;
      console.warn(fullMessage);
      return fullMessage;
    }
    else if (new Date(date) < new Date()) {
      const fullMessage = `${baseErrorMessage}The date is in the past.`;
      console.warn(fullMessage);
      return fullMessage
    }
    else return null;
  }
}
