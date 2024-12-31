import { mockPastDueDate, mockValidDueDate } from "./__mocks__/due-date-mock";
import TodoItemDueDate from "../src/scripts/components/todo-item/due-date";
describe("TodoItemDueDate", () => {
  it("should create a new todo item due date", () => {
    expect(mockValidDueDate).toBeInstanceOf(Date);
  });

  it("should throw when attempting to create todo-item with a past due date", () => {
    expect(() => {
      new TodoItemDueDate(mockPastDueDate);
    }).toThrow('The due date is in the past.');
  });
});
