import formatTodoTitle from '../../../utils/fmt/format-todo-title';
export default class TodoItem {
  constructor(title) {
    this.title = formatTodoTitle(title);
  }
}
