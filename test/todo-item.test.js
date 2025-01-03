import { mockTodoItem1 } from "./__mocks__/todo-item-mock.js";

describe("TodoItem", () => {
  it("should create a new todo item", () => {
    expect(mockTodoItem1.title).toBe("Title");
    expect(mockTodoItem1.description).toBe("Description");
    expect(mockTodoItem1.dueDate).toBe(mockTodoItem1.dueDate);
    expect(mockTodoItem1.notes).toBe("Notes");
    expect(mockTodoItem1.priority).toBe('low');
  });
});
