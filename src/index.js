import './style.css';
import UI from './scripts/components/ui';

// Sample data for todo lists and items
const sampleTodoItems = [
  { title: 'Buy groceries', dueDate: '2025-12-01', priority: 'high' },
  { title: 'Walk the dog', dueDate: '2025-12-02', priority: 'medium' },
];

const sampleTodoLists = [
  { title: 'Personal', todos: sampleTodoItems },
  { title: 'Work', todos: [] },
];

document.addEventListener('DOMContentLoaded', () => {
  UI.renderTodoLists(sampleTodoLists);
});
