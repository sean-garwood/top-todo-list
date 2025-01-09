import Statuses from 'Constants/statuses';
import createTodoElement from './create-todo-element';
import renderTodoItems from './todo-item';

const createTodoListElement = (todoList) => {
  const getCount = (status) => {
    return todoList.todos.filter((todo) => todo.status === status).length;
  }
  const completedCount = getCount(Statuses.COMPLETE);
  const incompleteCount = getCount(Statuses.NOT_STARTED) + getCount(Statuses.IN_PROGRESS);
  const todoListElement = createTodoElement('div', 'todo-list', `
    <div class="todo-list-container">
      <h2>${todoList.title}</h2>
      <p>Description: ${todoList.description}</p>
      <p>Due: ${todoList.formattedDueDate()}</p>
      <div class="todo-list-details-container" style="display: none;">
        <p>Priority: ${todoList.priority}</p>
        <p>Notes: ${todoList.notes}</p>
        <div class="list-stats">
          <p>Completion status: ${todoList.status}</p>
          <p>Number of tasks: ${todoList.todos.length}</p>
          <p>Completed: ${completedCount}</p>
          <p>Incomplete: ${incompleteCount}</p>
        </div>
        <div class="todo-items-container"></div>
      </div>
      <div class="todo-list-btns-container">
        <button class="expand-todo-list-btn">Expand Todo List</button>
        <button class="edit-todo-list-btn">Edit Todo List</button>
        <button class="delete-todo-list-btn">Delete Todo List</button>
        <button class="add-todo-list-btn">Add Todo Item</button>
      </div>
    </div>
  `);

  function handleCollapseClick(event) {
    const detailsContainer = todoListElement.querySelector('.todo-list-details-container');
    detailsContainer.style.display = detailsContainer.style.display === 'none' ? 'block' : 'none';
    event.target.textContent = event.target.textContent === 'Expand Todo List' ? 'Collapse Todo List' : 'Expand Todo List';
    event.target.classList.toggle('collapse-todo-list-btn');
    event.target.removeEventListener('click', handleCollapseClick);
    event.target.addEventListener('click', handleExpandClick);
  }
  function handleExpandClick(event) {
    const detailsContainer = todoListElement.querySelector('.todo-list-details-container');
    detailsContainer.style.display = detailsContainer.style.display === 'none' ? 'block' : 'none';
    event.target.textContent = event.target.textContent === 'Expand Todo List' ? 'Collapse Todo List' : 'Expand Todo List';
    event.target.classList.toggle('collapse-todo-list-btn');
    event.target.removeEventListener('click', handleExpandClick);
    event.target.addEventListener('click', handleCollapseClick);
  }

  todoListElement.querySelector('.expand-todo-list-btn').addEventListener('click', handleExpandClick);

  return todoListElement;
};

const renderTodoLists = (todoLists) => {
  const todoListsContainer = document.querySelector('#todo-lists');
  todoListsContainer.innerHTML = '';
  todoLists.forEach((todoList) => {
    const todoListElement = createTodoListElement(todoList);
    todoListsContainer.appendChild(todoListElement);
    console.log('Rendering todo items for list:', todoList.title, todoList.todos);
    renderTodoItems(todoList.todos, todoListElement.querySelector('.todo-items-container'));
  });
};

export default renderTodoLists;
