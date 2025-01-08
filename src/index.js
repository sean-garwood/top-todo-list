import './style.css';
import UI from 'Components/ui.js';
import TodoItem from 'Components/todo-item.js';
import TodoList from 'Components/todo-list.js';
import DefaultTodoList from 'Constants/default-todo-list.js';
import Modal from 'Utils/modal.js';

const todoLists = [];

// default todo list
todoLists.push(DefaultTodoList);

document.addEventListener('DOMContentLoaded', () => {
  UI.renderTodoLists(todoLists);

  document.getElementById('create-todo-list').addEventListener('click', () => {
    const formHtml = `
      <form id="todo-list-form">
        <legend>Enter Todo List Information</legend>
        <fieldset>
          <div class="field-container">
            <label for="title">Title:</label>
            <input type="text" name="title" id="todo-list-title" required>
          </div>
          <div class="field-container">
            <label for="description">Description:</label>
            <textarea name="description" id="todo-list-description" required></textarea>
          </div>
          <div class="field-container">
            <label for="due-date">Due Date:</label>
            <input type="date" name="due-date" id="todo-list-due-date" required>
          </div>
          <div class="field-container">
            <label for="notes">Notes:</label>
            <textarea name="notes" id="todo-list-notes"></textarea>
          </div>
          <div class="field-container">
            <label for="priority">Priority:</label>
            <select name="priority" id="todo-list-priority" required>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div class="submit-btn-container">
            <button type="submit" id="todo-list-submit-btn">Submit</button>
          </div>
        </fieldset>
      </form>
    `;
    const modal = new Modal(formHtml);
    modal.open();

    document.querySelector('#todo-list-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const newTodoList = new TodoList(
        event.target.title.value,
        event.target.description.value,
        event.target['due-date'].value,
        event.target.notes.value,
        event.target.priority.value,
        []
      );
      todoLists.push(newTodoList);
      UI.renderTodoLists(todoLists);
      modal.close();
    });
  });
});
