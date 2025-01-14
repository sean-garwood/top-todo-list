import { todoItemFormTemplate } from 'Constants/todo-forms';
import Statuses from 'Constants/statuses';
import todoLists from '../../..';
import createTodoElement from "./create-todo-element";
import Modal from 'Utils/modal';
import renderTodoLists from './todo-list';

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

  const addListeners = (() => {
    const index = getIndexOfTodoItem(todoItem, todoItems);
    const deleteTodoItemBtn = todoItemElement.querySelector('.delete-todo-item-btn');
    const editTodoItemBtn = todoItemElement.querySelector('.edit-todo-item-btn');
    const markCompleteBtn = todoItemElement.querySelector('.mark-complete-btn');

    deleteTodoItemBtn.addEventListener('click', () => {
      deleteTodoItem(todoItems, index);
      renderTodoLists(todoLists);
    });

    editTodoItemBtn.addEventListener('click', () => {
      const modal = new Modal(todoItemFormTemplate);
      modal.open();
      const editTodoItemForm = document.querySelector('#todo-item-form');
      editTodoItemForm.title.value = todoItem.title;
      editTodoItemForm.description.value = todoItem.description;
      editTodoItemForm['due-date'].value = todoItem.formattedDueDateForForm();
      editTodoItemForm.notes.value = todoItem.notes;
      editTodoItemForm.priority.value = todoItem.priority;

      editTodoItemForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const form = event.target;
        todoItem.title = form.title.value;
        todoItem.description = form.description.value;
        todoItem.dueDate = form['due-date'].value;
        todoItem.priority = form.priority.value;
        todoItem.notes = form.notes.value;
        modal.close();
        renderTodoItems(todoItems, todoListContainer);
      });
    });

    markCompleteBtn.addEventListener('click', () => {
      todoItem.markComplete();
      renderTodoLists(todoLists)
    });
  })();

  return todoItemElement;
};

const renderTodoItems = (todoItems, todoListContainer) => {
  todoListContainer.innerHTML = '';
  todoItems.forEach((todoItem) => {
    const todoItemElement = createTodoItemElement(
      todoItem,
      todoItems,
      renderTodoItems,
      todoListContainer);
    if (todoItem.isComplete()) {
      console.log(`marking ${todoItemElement.classList} as complete`);
      console.log(`it has the following children: ${todoItemElement.children}`);
      console.log(`its parent is ${todoItemElement.parentElement}`);
      todoItemElement.classList.add('complete');
    }

    todoListContainer.appendChild(todoItemElement);
  });
};

export default renderTodoItems;
