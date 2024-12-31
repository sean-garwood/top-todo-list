import LengthLimits from '../../constants/length-limits';

export default class Title {
  constructor(title) {
    this.title = this._validate(title);
  }

  _validate(title) {
    if (title.length < LengthLimits.Title.min) {
      throw new Error('The title is too short.');
    }

    if (title.length > LengthLimits.Title.max) {
      throw new Error('The title is too long.');
    }

    return title;
  }
}
