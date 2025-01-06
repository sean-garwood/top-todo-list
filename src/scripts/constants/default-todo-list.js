// when the user visits the page, a default todo list is
// created and rendered.

import TodoList from '../components/todo-list.js';
import defaultDescription from './default-todo-list/description.js';
import defaultDueDate from './default-todo-list/due-date.js';
import defaultNotes from './default-todo-list/notes.js';
import defaultPriority from './default-todo-list/priority.js';
import defaultTitle from './default-todo-list/title.js';
import defaultTodoItem from './default-todo-list/todo-item.js';

const defaultTodoList = new TodoList(
  defaultTitle,
  defaultDescription,
  defaultDueDate,
  defaultNotes,
  defaultPriority,
  [defaultTodoItem]
);

export default defaultTodoList;
