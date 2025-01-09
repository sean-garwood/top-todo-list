const todoItemFormTemplate = `
  <form id="todo-item-form">
  <legend>Enter Todo Item Information</legend>
  <fieldset>
    <div class="field-container">
      <label for="title">Title:</label>
      <input type="text" name="title" id="todo-item-title" required>
    </div>
    <div class="field-container">
      <label for="description">Description:</label>
      <textarea name="description" id="todo-item-description" required></textarea>
    </div>
    <div class="field-container">
      <label for="due-date">Due Date:</label>
      <input type="date" name="due-date" id="todo-item-due-date" required>
    </div>
    <div class="field-container">
      <label for="notes">Notes:</label>
      <textarea name="notes" id="todo-item-notes"></textarea>
    </div>
    <div class="field-container">
      <label for="priority">Priority:</label>
      <select name="priority" id="todo-item-priority" required>
        <option value="Low" default>Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
    <div class="submit-btn-container">
      <button type="submit" id="todo-item-submit-btn">Submit</button>
    </div>
  </fieldset>
</form>
`;

export default todoItemFormTemplate;