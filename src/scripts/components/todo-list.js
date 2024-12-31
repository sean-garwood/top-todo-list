import { Title, Description, DueDate, Notes, Priority, Status } from './shared';

export default class TodoList {
  constructor(title, description, dueDate, notes, priority, todos = []) {
    this.title = new Title(title).title;
    this.description = new Description(description).description;
    this.dueDate = new DueDate(dueDate).dueDate;
    this.notes = new Notes(notes).notes;
    this.priority = new Priority(priority).priority;
    this.status = new Status().status;
    this.todos = Array.isArray(todos) ? todos : [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(todo) {
    this.todos = this.todos.filter((item) => item !== todo);
  }

  isEmpty() {
    return this.todos.length === 0;
  }

  isComplete() {
    return this.todos.every((todo) => todo.isComplete());
  }
}
