import { Title, Description, DueDate, Notes, Priority, Status } from './shared';
import Statuses from 'Constants/statuses';
import { formatDate, formatDateForForm } from 'Utils/format-date';

export default class TodoItem {
  constructor(title,
    description,
    dueDate,
    notes,
    priority,
    status = Statuses.INCOMPLETE) {
    this.title = new Title(title).title;
    this.description = new Description(description).description;
    this.dueDate = new DueDate(dueDate).dueDate;
    this.notes = new Notes(notes).notes;
    this.priority = new Priority(priority).priority;
    this._status = new Status(status).status;
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

  formattedDueDateForForm() {
    return formatDateForForm(this.dueDate);
  }

  isComplete() {
    return this.status === Statuses.COMPLETE;
  }

  markComplete() {
    this._status = Statuses.COMPLETE;
  }
}
