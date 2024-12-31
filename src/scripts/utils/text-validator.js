import LengthLimits from "../constants/length-limits";

export default class TextValidator {
  static validate(obj, type) {
    const typeLimits = LengthLimits[type];
    const baseErrorMessage = `The ${type.toLowerCase()} is too `;

    if (!typeLimits) {
      throw new Error(`No length limits defined for type: ${type}`);
    }
    else if (obj.length < typeLimits.min) {
      return `${baseErrorMessage}short.\nMin: ${typeLimits.min}, Actual: ${obj.length}`;
    }
    else if (obj.length > typeLimits.max) {
      return `${baseErrorMessage}long.\nMax: ${typeLimits.max}, Actual: ${obj.length}`;
    }
    else {
      return null;
    }
  }
};
