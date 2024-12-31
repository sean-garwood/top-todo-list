import { mockPastDueDate, mockValidDueDate } from "./__mocks__/due-date-mock";
import DueDate from "../src/scripts/components/shared/due-date";
describe("DueDate", () => {
  it("should create a new todo item due date", () => {
    expect(mockValidDueDate).toBeInstanceOf(Date);
  });

  it("should throw when attempting to create todo-item with a past due date", () => {
    expect(() => {
      new DueDate(mockPastDueDate);
    }).toThrow('The due date is in the past.');
  });
});
