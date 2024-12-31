import TodoItemDueDate from '../../src/scripts/components/todo-item/due-date';

const mockValidDueDate = new TodoItemDueDate(new Date(2026, 11, 31)).dueDate;
const mockPastDueDate = new Date(2020, 11, 31);

export { mockPastDueDate, mockValidDueDate };
