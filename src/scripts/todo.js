export default class Todo {
  constructor(title, description, dueDate, priority, notes, prerequisites) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    // TodoList, can be empty
    this.prerequisites = prerequisites;
  }
}
