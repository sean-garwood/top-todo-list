export default class TodoList {
  constructor(name, todos = []) {
    this.name = name;
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
