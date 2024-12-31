import LengthLimits from '../../constants/length-limits';

export default class Notes {
  constructor(notes) {
    this.notes = this._validate(notes);
  }

  _validate(notes) {
    if (notes.length < LengthLimits.Notes.min) {
      throw new Error('The notes are too short.');
    }

    if (notes.length > LengthLimits.Notes.max) {
      throw new Error('The notes are too long.');
    }

    return notes;
  }
}
