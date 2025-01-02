import './style.css';
import UI from './scripts/components/ui';
import TodoItem from './scripts/components/todo-item';
import TodoList from './scripts/components/todo-list';
import DefaultTodoList from './scripts/constants/default-todo-list';

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
