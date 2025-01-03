import Notes from '../../src/scripts/components/shared/notes.js';

const validNotes = new Notes("notes");
const invalidNotesContent = "a".repeat(100000);

export { validNotes, invalidNotesContent };
