import {
  validPriority,
  invalidPriorityContent,
} from "./__mocks__/priority-mock";
import Priority from "../src/scripts/components/shared/priority";

describe("Priority", () => {
  it("should return a valid priority", () => {
    expect(validPriority.priority).toEqual("Low");
  });

  it("should return an invalid priority", () => {
    const invalidPriority = new Priority(invalidPriorityContent);
    expect(invalidPriority.error).toBe(
      `Invalid priority: lowish\nPlease enter a valid priority.\nValid priorities: Low, Medium, High`,
    );
  });
});
