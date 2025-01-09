const todoListFormTemplate = `
  <form id="todo-list-form">
  <legend>Enter Todo List Information</legend>
  <fieldset>
    <div class="field-container">
      <label for="title">Title:</label>
      <input type="text" name="title" id="todo-list-title" required>
    </div>
    <div class="field-container">
      <label for="description">Description:</label>
      <textarea name="description" id="todo-list-description" required></textarea>
    </div>
    <div class="field-container">
      <label for="due-date">Due Date:</label>
      <input type="date" name="due-date" id="todo-list-due-date" required>
    </div>
    <div class="field-container">
      <label for="notes">Notes:</label>
      <textarea name="notes" id="todo-list-notes"></textarea>
    </div>
    <div class="field-container">
      <label for="priority">Priority:</label>
      <select name="priority" id="todo-list-priority" required>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
    <div class="submit-btn-container">
      <button type="submit" id="todo-list-submit-btn">Submit</button>
    </div>
  </fieldset>
  </form>
`;

export default todoListFormTemplate;
