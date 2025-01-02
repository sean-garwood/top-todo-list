import LengthLimits from '../length-limits.js';
import Priorities from '../priorities.js';
import TodoItem from '../../components/todo-item.js';

const defaultTitle = 'Mark this complete!';
const defaultDescription =
  'This is the todo description.' +
  `Put a short (<${LengthLimits.Description.max} characters)` +
  'description here. Descriptions are required. Must be at least' +
  ` ${LengthLimits.Description.min} characters long.`;
const defaultDueDate = new Date();
const defaultNotes =
  'These are the notes for the todo. They are not required, but they can be' +
  ` up to ${LengthLimits.Notes.max} characters.`;
const defaultPriority = Priorities.HIGH;
const defaultTodoItem = new TodoItem(
  defaultTitle,
  defaultDescription,
  defaultDueDate,
  defaultNotes,
  defaultPriority
);

export default defaultTodoItem;
