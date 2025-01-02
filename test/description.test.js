// testing ../src/scripts/components/shared/description.js

import Description from '../src/scripts/components/shared/description.js';
import { validDescription, invalidDescriptionText } from './__mocks__/description-mock';

describe('Description', () => {
  it('should create a new Description object with a valid description', () => {
    const d = validDescription;
    expect(d.error).toBeUndefined();
  });

  it('should be an error if the description is invalid', () => {
    const d = new Description(invalidDescriptionText);
    expect(d.error).toBe(`The description is too short.\nMin: 3, Actual: ${invalidDescriptionText.length}`);
  });
});
