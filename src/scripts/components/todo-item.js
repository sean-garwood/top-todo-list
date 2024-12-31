import TodoItemTitle from './todo-item/title';
import TodoItemDescription from './todo-item/description';
import TodoItemNotes from './todo-item/notes';
import TodoItemDueDate from './todo-item/due-date';
import TodoItemPriority from './todo-item/priority';

export default class TodoItem {
  constructor(title, description, dueDate, notes, priority) {
    this.title = new TodoItemTitle(title).title;
    this.description = new TodoItemDescription(description).description;
    this.dueDate = new TodoItemDueDate(dueDate).dueDate;
    this.notes = new TodoItemNotes(notes).notes;
    this.priority = new TodoItemPriority(priority).priority;
  }
}
