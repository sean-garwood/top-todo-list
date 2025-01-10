import './style.css';
import UI from 'Components/ui';
import TodoItem from 'Components/todo-item';
import TodoList from 'Components/todo-list';
import DefaultTodoList from 'Constants/default-todo-list';
import Modal from 'Utils/modal';
import { todoItemFormTemplate, todoListFormTemplate } from 'Constants/todo-forms';

const todoLists = [];

todoLists.push(DefaultTodoList);

document.addEventListener('DOMContentLoaded', () => {
  UI.renderTodoLists(todoLists);

  document.getElementById('create-todo-list-btn').addEventListener('click', () => {
    const modal = new Modal(todoListFormTemplate);
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
      modal.close();
      todoLists.push(newTodoList);
      UI.renderTodoLists(todoLists);
    });
  });
});

export default todoLists;
