const createElement = (tag, className, innerHTML) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.innerHTML = innerHTML;
  return element;
};

const createTodoListElement = (todoList) => {
  const todoListElement = createElement('div', 'todo-list', `
    <h2>${todoList.title}</h2>
    <div class="todo-items"></div>
  `);
  return todoListElement;
};

const createTodoItemElement = (todoItem) => {
  const todoItemElement = createElement('div', 'todo-item', `
    <h3>${todoItem.title}</h3>
    <p>Due: ${todoItem.dueDate}</p>
    <p>Priority: ${todoItem.priority}</p>
    <button class="expand-todo-item">Expand</button>
    <button class="delete-todo-item">Delete</button>
  `);
  return todoItemElement;
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

const renderTodoItems = (todoItems, todoListContainer) => {
  console.log('Rendering todo items:', todoItems);
  todoListContainer.innerHTML = '';
  todoItems.forEach((todoItem) => {
    const todoItemElement = createTodoItemElement(todoItem);
    todoListContainer.appendChild(todoItemElement);
  });
};

const UI = {
  renderTodoLists,
  renderTodoItems,
};

export default UI;
