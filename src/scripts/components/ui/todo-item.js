import TodoItem from 'Components/todo-item';
import createTodoElement from "./create-todo-element";
import Modal from 'Utils/modal';

const getIndexOfTodoItem = (todoItem, todoItems) => {
  return todoItems.indexOf(todoItem);
}

const deleteTodoItem = (todoItems, index) => {
  todoItems.splice(index, 1);
}

const updateTodoItem = (todoItems, index, updatedTodoItem) => {
  todoItems.splice(index, 1, updatedTodoItem);
};

const createTodoItemElement = (
  todoItem,
  todoItems,
  renderTodoItems,
  todoListContainer) => {
  const todoItemElement = createTodoElement(
    'div',
    'todo-item',
    `
      <h3>${todoItem.title}</h3>
      <p>Description: ${todoItem.description}</p>
      <p>Due: ${todoItem.formattedDueDate()}</p>
      <p>Priority: ${todoItem.priority}</p>
      <p>Notes: ${todoItem.notes}</p>
      <p>Completion status: ${todoItem.status}</p>
      <button class="expand-todo-item-btn">Expand Todo Item</button>
      <button class="delete-todo-item-btn">Delete Todo Item</button>
      <button class="edit-todo-item-btn">Edit Todo Item</button>
    `);

  const index = getIndexOfTodoItem(todoItem, todoItems);
  todoItemElement.querySelector('.delete-todo-item-btn').
    addEventListener('click', () => {
      deleteTodoItem(todoItems, index);
      renderTodoItems(todoItems, todoListContainer);
    });

  todoItemElement.querySelector('.edit-todo-item-btn').addEventListener('click', () => {
    // pull up modal form filled with current data
    const modal = new Modal(`
      <form id="edit-todo-item-form">
        <label for="edit-todo-item-title">Title:</label>
        <input type="text" id="edit-todo-item-title" value="${todoItem.title}">
        <label for="edit-todo-item-description">Description:</label>
        <input type="text" id="edit-todo-item-description" value="${todoItem.description}">
        <label for="edit-todo-item-due-date">Due Date:</label>
        <input type="date" id="edit-todo-item-due-date" value="${todoItem.dueDate}">
        <label for="edit-todo-item-priority">Priority:</label>
        <input type="text" id="edit-todo-item-priority" value="${todoItem.priority}">
        <label for="edit-todo-item-notes">Notes:</label>
        <input type="text" id="edit-todo-item-notes" value="${todoItem.notes}">
        <label for="edit-todo-item-status">Completion status:</label>
        <input type="text" id="edit-todo-item-status" value="${todoItem.status}">
        <button type="submit">Edit Todo Item</button>
      </form>
    `);
    modal.open();
    const editTodoItemForm = document.getElementById('edit-todo-item-form');
    editTodoItemForm.addEventListener('submit', (event) => {
      // update the information in the todo item
      event.preventDefault();
      // use the form fields to create new components
      const titleValue = document.getElementById('edit-todo-item-title').value;
      const descriptionValue = document.getElementById('edit-todo-item-description').value;
      const dueDateValue = document.getElementById('edit-todo-item-due-date').value;
      const priorityValue = document.getElementById('edit-todo-item-priority').value;
      const notesValue = document.getElementById('edit-todo-item-notes').value;
      const statusValue = document.getElementById('edit-todo-item-status').value;
      const updatedTodoItem = new TodoItem(titleValue, descriptionValue, dueDateValue, priorityValue, notesValue, statusValue);
      updateTodoItem(todoItems, index, updatedTodoItem);
    });
  })
  return todoItemElement;
};

const renderTodoItems = (todoItems, todoListContainer) => {
  console.log('Rendering todo items:', todoItems);
  console.log(`into ${todoListContainer.classList}`);
  todoListContainer.innerHTML = '';
  todoItems.forEach((todoItem) => {
    const todoItemElement = createTodoItemElement(
      todoItem,
      todoItems,
      renderTodoItems,
      todoListContainer);
    todoListContainer.appendChild(todoItemElement);
  });
};

export default renderTodoItems;
