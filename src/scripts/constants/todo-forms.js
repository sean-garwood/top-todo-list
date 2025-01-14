const generateTodoFormTemplate = (type) => `
  <form id="${type}-form">
  <fieldset>
  <legend>${type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")} Information</legend>
    <div class="field-container">
      <label for="title">Title:</label>
      <input type="text" name="title" id="${type}-title" required>
    </div>
    <div class="field-container">
      <label for="description">Description:</label>
      <textarea name="description" id="${type}-description" required></textarea>
    </div>
    <div class="field-container">
      <label for="due-date">Due Date:</label>
      <input type="date" name="due-date" id="${type}-due-date" required>
    </div>
    <div class="field-container">
      <label for="notes">Notes:</label>
      <textarea name="notes" id="${type}-notes"></textarea>
    </div>
    <div class="field-container">
      <label for="priority">Priority:</label>
      <select name="priority" id="${type}-priority" required>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
    <div class="submit-btn-container">
      <button type="submit" id="${type}-submit-btn">Submit</button>
    </div>
  </fieldset>
  </form>
`;

const todoListFormTemplate = generateTodoFormTemplate("todo-list");
const todoItemFormTemplate = generateTodoFormTemplate("todo-item");

export { todoListFormTemplate, todoItemFormTemplate };
