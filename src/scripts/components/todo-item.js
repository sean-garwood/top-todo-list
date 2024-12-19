import TodoItemTitle from './todo-item/title';
import TodoItemDescription from './todo-item/description';
import TodoItemNotes from './todo-item/notes';

export default class TodoItem {
  constructor(title, description, dueDate, notes) {
    this.title = new TodoItemTitle(title).title;
    this.description = new TodoItemDescription(description).description;
    this.dueDate = dueDate;
    this.notes = new TodoItemNotes(notes).notes;
  }
}
