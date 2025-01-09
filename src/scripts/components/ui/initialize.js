import Modal from 'Utils/modal';
export default function initialize() {
  const todoLists = [];

  todoLists.push(DefaultTodoList);

  document.addEventListener('DOMContentLoaded', () => {
    UI.renderTodoLists(todoLists);

    document.getElementById('create-todo-list-btn').addEventListener('click', () => {
      const modal = new Modal(blankTodoListFormHTML);
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
}
