// import './style.css';
import UI from './scripts/components/ui.js';
import TodoItem from './scripts/components/todo-item.js';
import TodoList from './scripts/components/todo-list.js';
import DefaultTodoList from './scripts/constants/default-todo-list.js';

const todoLists = [];

// default todo list
todoLists.push(DefaultTodoList);
document.addEventListener('DOMContentLoaded', () => {
  UI.renderTodoLists(todoLists);

  document.getElementById('create-todo-list').addEventListener('click', () => {
    let newTodoList = DefaultTodoList;
    todoLists.push(newTodoList);
    UI.renderTodoLists(todoLists);
  });
});
