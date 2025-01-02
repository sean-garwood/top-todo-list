// ui.js

const UI = (() => {
  const createTodoListElement = (todoList) => {
    const todoListElement = document.createElement('div');
    todoListElement.classList.add('todo-list');
    todoListElement.innerHTML = `
      <h2>${todoList.title}</h2>
      <div class="todo-items"></div>
    `;
    return todoListElement;
  };

  const createTodoItemElement = (todoItem) => {
    const todoItemElement = document.createElement('div');
    todoItemElement.classList.add('todo-item');
    todoItemElement.innerHTML = `
      <h3>${todoItem.title}</h3>
      <p>Due: ${todoItem.dueDate}</p>
      <p>Priority: ${todoItem.priority}</p>
      <button class="expand-todo-item">Expand</button>
      <button class="delete-todo-item">Delete</button>
    `;
    return todoItemElement;
  };

  const renderTodoLists = (todoLists) => {
    const todoListsContainer = document.querySelector('#todo-lists');
    todoListsContainer.innerHTML = '';
    todoLists.forEach((todoList) => {
      const todoListElement = createTodoListElement(todoList);
      todoListsContainer.appendChild(todoListElement);
      renderTodoItems(todoList.todos, todoListElement.querySelector('.todo-items'));
    });
  };

  const renderTodoItems = (todoItems, todoListContainer) => {
    todoListContainer.innerHTML = '';
    todoItems.forEach((todoItem) => {
      const todoItemElement = createTodoItemElement(todoItem);
      todoListContainer.appendChild(todoItemElement);
    });
  };

  return {
    renderTodoLists,
    renderTodoItems,
  };
})();

export default UI;
