import formatTodoTitle from '../../../utils/text-formatters/titles/format-title';
export default class TodoItem {
  constructor(title) {
    this.title = formatTodoTitle(title);
  }
}
