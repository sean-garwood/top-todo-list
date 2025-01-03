import { mockPastDueDate, mockValidDueDate } from "./__mocks__/due-date-mock.js";
import DueDate from "../src/scripts/components/shared/due-date.js";
describe("DueDate", () => {
  it("should create a new todo item due date", () => {
    expect(mockValidDueDate).toBeInstanceOf(Date);
  });

  it("should be an error if the due date is in the past", () => {
    const dueDate = new DueDate(mockPastDueDate);
    expect(dueDate.error).toBe(
      `Invalid date: ${mockPastDueDate}\nThe date is in the past.`
    );
  });
});
