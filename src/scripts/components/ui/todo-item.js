import { todoItemFormTemplate } from 'Constants/todo-forms';
import TodoItem from 'Components/todo-item';
import createTodoElement from "./create-todo-element";
import Modal from 'Utils/modal';

const getIndexOfTodoItem = (todoItem, todoItems) => {
  return todoItems.indexOf(todoItem);
}

const deleteTodoItem = (todoItems, index) => {
  todoItems.splice(index, 1);
}

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
      <button class="delete-todo-item-btn">Delete Todo Item</button>
      <button class="edit-todo-item-btn">Edit Todo Item</button>
      <button class="mark-complete-btn">Mark Complete</button>
    `);

  const index = getIndexOfTodoItem(todoItem, todoItems);
  const deleteTodoItemBtn = todoItemElement.querySelector('.delete-todo-item-btn');
  const editTodoItemBtn = todoItemElement.querySelector('.edit-todo-item-btn');
  const markCompleteBtn = todoItemElement.querySelector('.mark-complete-btn');

  deleteTodoItemBtn.addEventListener('click', () => {
    deleteTodoItem(todoItems, index);
    renderTodoItems(todoItems, todoListContainer);
  });

  editTodoItemBtn.addEventListener('click', () => {
    // pull up modal form filled with current data
    const modal = new Modal(todoItemFormTemplate);
    modal.open();
    const editTodoItemForm = document.querySelector('#todo-item-form');
    editTodoItemForm.addEventListener('submit', (event) => {
      event.preventDefault();
      todoItem.title = event.target.title.value;
      todoItem.description = event.target.description.value;
      todoItem.dueDate = event.target['due-date'].value;
      todoItem.priority = event.target.priority.value;
      todoItem.notes = event.target.notes.value;
      todoItem.status = event.target.status.value;
      modal.close();
      renderTodoItems(todoItems, todoListContainer);
    });
  });

  markCompleteBtn.addEventListener('click', () => {
    todoItem.markComplete();
    renderTodoItems(todoItems, todoListContainer);
  });

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
