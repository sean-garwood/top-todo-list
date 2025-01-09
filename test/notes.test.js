import { validNotes, invalidNotesContent } from './__mocks__/notes-mock';
import Notes from '../src/scripts/components/shared/notes';
describe('Notes', () => {
  it('should create a new todo item notes given content with valid length', () => {
    expect(validNotes.notes).toBe('notes');
  });

  it('should not create a new todo item notes given content with invalid length', () => {
    const invalidNotes = new Notes(invalidNotesContent);
    expect(invalidNotes.error).toBe('The notes is too long.\nMax: 1000, Actual: 100000');
  });
});
