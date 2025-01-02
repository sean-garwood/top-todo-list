import LengthLimits from '../length-limits';
import Priorities from '../priorities';
import Statuses from '../statuses';
import TodoItem from '../../components/todo-item';

const defaultTitle = 'Mark this complete!';
const defaultDescription =
  'This is the description of the todo.' +
  `Put a short (less than ${LengthLimits.Description.max} characters)` +
  'description here. Descriptions are required and must be at least' +
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
