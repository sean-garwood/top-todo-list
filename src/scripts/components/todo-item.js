import { Title, Description, DueDate, Notes, Priority, Status } from './shared';
import Statuses from 'Constants/statuses';
import formatDate from 'Utils/format-date';

export default class TodoItem {
  constructor(title, description, dueDate, notes, priority) {
    this.title = new Title(title).title;
    this.description = new Description(description).description;
    this.dueDate = new DueDate(dueDate).dueDate;
    this.notes = new Notes(notes).notes;
    this.priority = new Priority(priority).priority;
    this._status = Statuses.NOT_STARTED;
  }

  get title() { return this._title; }
  set title(value) {
    this._title = new Title(value).title;
  }

  get description() { return this._description; }
  set description(value) {
    this._description = new Description(value).description;
  }

  get dueDate() { return this._dueDate; }
  set dueDate(value) {
    this._dueDate = new DueDate(value).dueDate;
  }

  get notes() { return this._notes; }
  set notes(value) {
    this._notes = new Notes(value).notes;
  }

  get priority() { return this._priority; }
  set priority(value) {
    let newPriority = new Priority(value);
    if (newPriority.isValid) this._priority = newPriority.priority;
  }

  get status() { return this._status; }
  set status(value) {
    let newStatus = new Status(value);
    if (newStatus.isValid) this._status = newStatus.status;
  }

  formattedDueDate() {
    return formatDate(this.dueDate);
  }

  isComplete() {
    return this.status === Statuses.COMPLETED;
  }

}
