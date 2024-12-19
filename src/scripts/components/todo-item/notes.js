import LengthLimits from '../../constants/length-limits';

export default class TodoItemNotes {
  constructor(notes) {
    this.notes = this._validate(notes);
  }

  _validate(notes) {
    if (notes.length < LengthLimits.TodoItemNotes.min) {
      throw new Error('The notes are too short.');
    }

    if (notes.length > LengthLimits.TodoItemNotes.max) {
      throw new Error('The notes are too long.');
    }

    return notes;
  }
}
