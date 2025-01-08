import Statuses from 'Constants/statuses.js';
import createTodoElement from './create-todo-element.js';
import renderTodoItems from './todo-item.js';

const createTodoListElement = (todoList) => {
  const todoListElement = createTodoElement('div', 'todo-list', `
    <h2>${todoList.title}</h2>
    <button class="expand-todo-list">Expand Todo List</button>
    <button class="delete-todo-list">Delete Todo List</button>
    <p>Description: ${todoList.description}</p>
    <p>Due: ${todoList.dueDate}</p>
    <p>Priority: ${todoList.priority}</p>
    <p>Notes: ${todoList.notes}</p>
    <p>Completion status: ${todoList.status}</p>
    <p>Number of tasks: ${todoList.todos.length}</p>
    <p>Completed: ${todoList.todos.filter((todo) => todo.status === Statuses.COMPLETED).length}</p>
    <p>Incomplete: ${todoList.todos.filter((todo) => todo.status !== Statuses.COMPLETED).length}</p>
    <button class="add-todo-item">Add Todo Item</button>
    <div class="todo-items"></div>
  `);
  return todoListElement;
};

const renderTodoLists = (todoLists) => {
  const todoListsContainer = document.querySelector('#todo-lists');
  todoListsContainer.innerHTML = '';
  todoLists.forEach((todoList) => {
    const todoListElement = createTodoListElement(todoList);
    todoListsContainer.appendChild(todoListElement);
    console.log('Rendering todo items for list:', todoList.title, todoList.todos);
    renderTodoItems(todoList.todos, todoListElement.querySelector('.todo-items'));
  });
};

export default renderTodoLists;
