import LengthLimits from '../../constants/length-limits';

export default class Description {
  constructor(description) {
    this.description = this._validate(description);
  }

  _validate(description) {
    if (description.length < LengthLimits.Description.min) {
      throw new Error('The description is too short.');
    }

    if (description.length > LengthLimits.Description.max) {
      throw new Error('The description is too long.');
    }

    return description;
  }
};
