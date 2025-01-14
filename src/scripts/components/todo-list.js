import Statuses from "Constants/statuses";
import TodoItem from "./todo-item";

export default class TodoList extends TodoItem {
  constructor(title, description, dueDate, notes, priority, todos = []) {
    super(title, description, dueDate, notes, priority);
    this._todos = Array.isArray(todos) ? todos : [];
  }

  add(todo) {
    if (todo instanceof TodoItem) {
      this._todos.push(todo);
    } else {
      throw new Error("Only instances of TodoItem can be added to the list.");
    }
  }

  remove(todo) {
    this._todos = this._todos.filter((item) => item !== todo);
  }

  isEmpty() {
    return this._todos.length === 0;
  }

  isComplete() {
    return this._todos.every((todo) => todo.isComplete());
  }

  get status() {
    if (this.isEmpty()) return Statuses.INCOMPLETE;
    if (this.isComplete()) return Statuses.COMPLETE;
    return Statuses.INCOMPLETE;
  }

  get todos() {
    return this._todos;
  }
}
