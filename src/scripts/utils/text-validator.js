import LengthLimits from "Constants/length-limits";

export default class TextValidator {
  static validate(text, fieldName) {
    const typeLimits = LengthLimits[fieldName];
    const baseErrorMessage = `The ${fieldName.toLowerCase()} is too `;

    if (!typeLimits) {
      throw new Error(`No length limits defined for fieldName: ${fieldName}`);
    }
    else if (text.length < typeLimits.min) {
      return `${baseErrorMessage}short.\nMin: ${typeLimits.min}, Actual: ${text.length}`;
    }
    else if (text.length > typeLimits.max) {
      return `${baseErrorMessage}long.\nMax: ${typeLimits.max}, Actual: ${text.length}`;
    }
    else {
      return null;
    }
  }
};
