import LengthLimits from 'Constants/length-limits';
import Priorities from 'Constants/priorities';
import TodoItem from 'Components/todo-item';
import defaultDueDate from './due-date';

const defaultTitle = 'Mark this complete!';
const defaultDescription =
  `Put a short (<${LengthLimits.Description.max} characters) ` +
  'description here. Descriptions are required. Must be at least' +
  ` ${LengthLimits.Description.min} characters long.`;
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
