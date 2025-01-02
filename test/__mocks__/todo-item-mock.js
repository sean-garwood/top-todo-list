import TodoItem from '../../src/scripts/components/todo-item.js';
import Priorities from "../../src/scripts/constants/priorities.js";

const someDate1 = new Date(2025, 11, 31);
const somePriority1 = Priorities.LOW;
export const mockTodoItem1 = new TodoItem("Title", "Description", someDate1, "Notes", somePriority1);

const someDate2 = new Date(2025, 10, 30);
const somePriority2 = Priorities.HIGH;
export const mockTodoItem2 = new TodoItem("Another Title", "Another Description", someDate2, "Other Notes", somePriority2);
