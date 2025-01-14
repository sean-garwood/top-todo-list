import { mockPastDueDate, mockValidDueDate } from "./__mocks__/due-date-mock";
import DueDate from "../src/scripts/components/shared/due-date";
describe("DueDate", () => {
  it("should create a new todo item due date", () => {
    const dueDate = new DueDate(mockValidDueDate);
    expect(dueDate.dueDate).toBe(mockValidDueDate);
  });

  it("should be an error if the due date is in the past", () => {
    const dueDate = new DueDate(mockPastDueDate);
    expect(dueDate.error).toBe(
      `Invalid date: ${mockPastDueDate}\nThe date is in the past.`,
    );
  });
});
