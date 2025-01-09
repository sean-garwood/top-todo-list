// when the user visits the page, a default todo list is
// created and rendered.

import TodoList from 'Components/todo-list';
import defaultDescription from './default-todo-list/description';
import defaultDueDate from './default-todo-list/due-date';
import defaultNotes from './default-todo-list/notes';
import defaultPriority from './default-todo-list/priority';
import defaultTitle from './default-todo-list/title';
import defaultTodoItem from './default-todo-list/todo-item';

const defaultTodoList = new TodoList(
  defaultTitle,
  defaultDescription,
  defaultDueDate,
  defaultNotes,
  defaultPriority,
  [defaultTodoItem]
);

export default defaultTodoList;
