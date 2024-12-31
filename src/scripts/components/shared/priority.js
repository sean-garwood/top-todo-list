import PriorityValidator from "../../utils/priority-validator";
export default class Priority {
  constructor(priority) {
    const validationError = PriorityValidator.validate(priority);
    validationError ? this.error = validationError : this.priority = priority;
  }
}
