import { validTitle, invalidTitleContent } from './__mocks__/title-mock';
import Title from '../src/scripts/components/shared/title';
import LengthLimits from '../src/scripts/constants/length-limits';

describe('Title', () => {
  it('should create a valid title', () => {
    expect(validTitle).toBeInstanceOf(Title);
  });
  it('should add an error if title content is blank', () => {
    const invalidTitle = new Title(invalidTitleContent);
    expect(invalidTitle.error).toBe(`The title is too short.\nMin: ${LengthLimits.Title.min}, Actual: ${invalidTitleContent.length}`);
  });
});
