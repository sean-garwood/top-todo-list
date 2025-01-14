import "./style.css";
import renderTodoLists from "Components/ui/todo-list";
import TodoList from "Components/todo-list";
import Modal from "Utils/modal";
import { todoListFormTemplate } from "Constants/todo-forms";
import loadTodoLists from "Utils/storage/load-lists";

const todoLists = loadTodoLists();

document.addEventListener("DOMContentLoaded", () => {
  renderTodoLists(todoLists);

  document
    .getElementById("create-todo-list-btn")
    .addEventListener("click", () => {
      const modal = new Modal(todoListFormTemplate);
      modal.open();

      document
        .querySelector("#todo-list-form")
        .addEventListener("submit", (event) => {
          event.preventDefault();
          const newTodoList = new TodoList(
            event.target.title.value,
            event.target.description.value,
            event.target["due-date"].value,
            event.target.notes.value,
            event.target.priority.value,
            [],
          );
          modal.close();
          todoLists.push(newTodoList);
          renderTodoLists(todoLists);
        });
    });
});

export default todoLists;
