import TodoList from "../../src/scripts/components/todo-list";
import { mockTodoItem1, mockTodoItem2 } from "./todo-item-mock";

const someDueDate = mockTodoItem2.dueDate;
const somePriority = mockTodoItem1.priority;
export const mockEmptyTodoList = new TodoList(
  "Some Title",
  "Some Description",
  someDueDate,
  "Some Notes",
  somePriority,
);

export const mockTodoListWithItems = new TodoList(
  "Another Title",
  "Another Description",
  someDueDate,
  "Other Notes",
  somePriority,
  [mockTodoItem1, mockTodoItem2],
);
