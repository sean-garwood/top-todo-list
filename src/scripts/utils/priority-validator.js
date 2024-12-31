import Priorities from '../constants/priorities';

export default class PriorityValidator {
  static validate(priority) {
    const baseErrorMessage = `Invalid priority: ${priority}\n`;
    if (!Object.values(Priorities).includes(priority)) {
      return `${baseErrorMessage}Please enter a valid priority.\n` +
        `Valid priorities: ${Object.values(Priorities).join(', ')}`;
    } else return null;
  }
};
