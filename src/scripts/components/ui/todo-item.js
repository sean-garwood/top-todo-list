import createTodoElement from "./create-todo-element.js";

const createTodoItemElement = (todoItem) => {
  const todoItemElement = createTodoElement('div', 'todo-item', `
    <h3>${todoItem.title}</h3>
    <p>Description: ${todoItem.description}</p>
    <p>Due: ${todoItem.dueDate}</p>
    <p>Priority: ${todoItem.priority}</p>
    <p>Notes: ${todoItem.notes}</p>
    <p>Completion status: ${todoItem.status}</p>
    <button class="expand-todo-item">Expand Todo Item</button>
    <button class="delete-todo-item">Delete Todo Item</button>
  `);
  return todoItemElement;
};

const renderTodoItems = (todoItems, todoListContainer) => {
  console.log('Rendering todo items:', todoItems);
  todoListContainer.innerHTML = '';
  todoItems.forEach((todoItem) => {
    const todoItemElement = createTodoItemElement(todoItem);
    todoListContainer.appendChild(todoItemElement);
  });
};

export default renderTodoItems;
