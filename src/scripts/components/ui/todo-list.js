import TodoItem from 'Components/todo-item';
import todoLists from '../../..';
import Statuses from 'Constants/statuses';
import Modal from 'Utils/modal';
import createTodoElement from './create-todo-element';
import renderTodoItems from './todo-item';
import { todoListFormTemplate, todoItemFormTemplate } from 'Constants/todo-forms';
import storeTodoLists from 'Utils/storage/store-lists';


const createTodoListElement = (todoList) => {
  const getCount = (status) => {
    return todoList.todos.filter((todo) => todo.status == status).length;
  }
  const completeCount = getCount(Statuses.COMPLETE);
  const incompleteCount = getCount(Statuses.INCOMPLETE);
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
          <p>Completed: ${completeCount}</p>
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

  (() => {
    const expandTodoListBtn = todoListElement.querySelector('.expand-todo-list-btn');
    const editTodoListBtn = todoListElement.querySelector('.edit-todo-list-btn');
    const deleteTodoListBtn = todoListElement.querySelector('.delete-todo-list-btn');
    const addTodoItemBtn = todoListElement.querySelector('.add-todo-list-btn');

    function handleExpandClick(event) {
      function handleCollapseClick(event) {
        const detailsContainer = todoListElement.querySelector('.todo-list-details-container');
        detailsContainer.style.display = detailsContainer.style.display === 'none' ? 'block' : 'none';
        event.target.textContent = event.target.textContent === 'Expand Todo List' ? 'Collapse Todo List' : 'Expand Todo List';
        event.target.classList.toggle('collapse-todo-list-btn');
        event.target.removeEventListener('click', handleCollapseClick);
        event.target.addEventListener('click', handleExpandClick);
      }
      const detailsContainer = todoListElement.querySelector('.todo-list-details-container');
      detailsContainer.style.display = detailsContainer.style.display === 'none' ? 'block' : 'none';
      event.target.textContent = event.target.textContent === 'Expand Todo List' ? 'Collapse Todo List' : 'Expand Todo List';
      event.target.classList.toggle('collapse-todo-list-btn');
      event.target.removeEventListener('click', handleExpandClick);
      event.target.addEventListener('click', handleCollapseClick);
    }

    function handleEditClick() {
      const modal = new Modal(todoListFormTemplate);
      modal.open();
      const form = document.querySelector('#todo-list-form'); // HACK
      form.title.value = todoList.title;
      form.description.value = todoList.description;
      form['due-date'].value = todoList.formattedDueDateForForm();
      form.notes.value = todoList.notes;
      form.priority.value = todoList.priority;
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        todoList.title = event.target.title.value
        todoList.description = event.target.description.value
        todoList.dueDate = event.target['due-date'].value
        todoList.notes = event.target.notes.value
        todoList.priority = event.target.priority.value
        modal.close();
        renderTodoLists(todoLists);
      });
    }
    function handleDeleteClick() {
      todoLists.splice(todoLists.indexOf(todoList), 1);
      renderTodoLists(todoLists);
    }

    function handleAddClick() {
      const modal = new Modal(todoItemFormTemplate);
      modal.open();
      const form = document.querySelector('#todo-item-form'); // HACK
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const newTodo = new TodoItem(
          event.target.title.value,
          event.target.description.value,
          event.target['due-date'].value,
          event.target.notes.value,
          event.target.priority.value
        );
        todoList.add(newTodo);
        modal.close();
        renderTodoLists(todoLists);
      });
    }

    expandTodoListBtn.addEventListener('click', handleExpandClick);
    editTodoListBtn.addEventListener('click', handleEditClick);
    deleteTodoListBtn.addEventListener('click', handleDeleteClick);
    addTodoItemBtn.addEventListener('click', handleAddClick);
  })();

  if (todoList.isComplete()) todoListElement.classList.add('complete');

  return todoListElement;
};

const renderTodoLists = (todoLists) => {
  const todoListsContainer = document.querySelector('#todo-lists');
  todoListsContainer.innerHTML = '';
  todoLists.forEach((todoList) => {
    const todoListElement = createTodoListElement(todoList);
    todoListsContainer.appendChild(todoListElement);
    renderTodoItems(todoList.todos, todoListElement.querySelector('.todo-items-container'));
  });
  storeTodoLists(todoLists);
};

export default renderTodoLists;
