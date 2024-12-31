import { Title, Description, DueDate, Notes, Priority } from './shared';
import Statuses from '../constants/statuses';
import Priorities from '../constants/priorities';

export default class TodoItem {
  constructor(title, description, dueDate, notes, priority) {
    this.title = new Title(title).title;
    this.description = new Description(description).description;
    this.dueDate = new DueDate(dueDate).dueDate;
    this.notes = new Notes(notes).notes;
    this.priority = new Priority(priority).priority;
    this.status = Statuses.NOT_STARTED;
  }

  get priority() { return this._priority; }
  set priority(value) {
    if (!Object.values(Priorities).includes(value)) {
      throw new Error('Invalid priority');
    }

    this._priority = value;
  }

  get status() { return this._status; }
  set status(value) {
    if (!Object.values(Statuses).includes(value)) {
      throw new Error('Invalid status');
    }

    this._status = value;
  }
}
