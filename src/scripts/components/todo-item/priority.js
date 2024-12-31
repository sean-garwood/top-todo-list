import Priorities from '../../constants/priorities';
export default class TodoItemPriority {
  constructor(priority) {
    this.priority = this._validate(priority);
  }

  _validate(priority) {
    console.log(`Object.values(Priorities): ${Object.values(Priorities)}`);
    console.log(`priority: ${priority}`);
    if (!Object.values(Priorities).includes(priority)) {
      throw new Error('The priority is invalid.');
    }
    return priority;
  }
}
