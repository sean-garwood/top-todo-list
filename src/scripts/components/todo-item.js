import TodoItemTitle from './todo-item/title';
export default class TodoItem {
  constructor(title) {
    this.title = new TodoItemTitle(title);
  }
}
