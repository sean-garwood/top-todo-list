import { validPriority, invalidPriorityContent } from "./__mocks__/priority-mock";
import Priority from "../src/scripts/components/shared/priority";

describe('Priority', () => {
  it('should return a valid priority', () => {
    expect(validPriority.priority).toEqual('low');
  });

  it('should return an invalid priority', () => {
    const invalidPriority = new Priority(invalidPriorityContent);
    expect(invalidPriority.error).toBe(`Invalid priority: lowish\nPlease enter a valid priority.\nValid priorities: low, medium, high`);
  });
});
