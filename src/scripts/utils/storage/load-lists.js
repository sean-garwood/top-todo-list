import TodoList from 'Components/todo-list';
import TodoItem from 'Components/todo-item';
import DefaultTodoList from 'Constants/default-todo-list';
import checkIfLocalStorageAvailable from './check';

export default function loadTodoLists() {
  const itemsInStorage = localStorage.length;
  if (!checkIfLocalStorageAvailable() || itemsInStorage === 0) {
    return [DefaultTodoList];
  }

  const lists = [];
  const serializedLists = Object.values(localStorage);
  serializedLists.forEach((list) => { lists.push(reconstructTodoList(list)); });
  return lists;

  function reconstructTodoList(serializedList) {
    const parsedList = JSON.parse(serializedList);
    // list is a json object
    (() => {
      parsedList._todos = parsedList._todos.map((todo) => {
        return new TodoItem(
          todo._title,
          todo._description,
          todo._dueDate,
          todo._notes,
          todo._priority,
          todo._status
        );
      });
    })();
    return new TodoList(
      parsedList._title,
      parsedList._description,
      parsedList._dueDate,
      parsedList._notes,
      parsedList._priority,
      parsedList._todos
    );
  }
}
