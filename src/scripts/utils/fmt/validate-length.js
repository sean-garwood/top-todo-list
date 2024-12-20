/*
 * Validate length of a string to be in certain range
 * implemented as a callback function during construction of
 * a class instance
 * @param {string} text - text to validate
 * @param {number} minLength - minimum length of the text
 * @param {number} maxLength - maximum length of the text
 * @returns {string} - text if it is within the range
 * @throws {Error} - if text is not within the range
 */

import ValidationError from '../../constants/errors/validation-error';
import LengthLimits from '../../constants/length-limits';
export default class ValidateLength {
  #text; // string to be validated
  #type; // type of the text (e.g. title, description)

  constructor(text, type, minLength, maxLength) {
    this.#text = text;
    this.#type = type;
    this.minLength = minLength;
    this.maxLength = maxLength;
  }

  get text() { return this.#text; }
  get type() { return this.#type; }

  validator() {
    const isTooShort = this.#text.length < this.minLength ? -1 : 0;
    const isTooLong = this.#text.length > this.maxLength ? 1 : 0;
    const isValid = isTooShort === 0 && isTooLong === 0
    const result = { short: isTooShort, long: isTooLong };
    return { isValid, result };
  }
  validate() {
    const { isValid, result } = this.validator();
    if (isValid) return this.#text;

    switch (result) {
      case -1:
        throw new ValidationError(`${this.#type} must be at least ${this.minLength} characters long`);
      case 1:
        throw new ValidationError(`${this.#type} must be at most ${this.maxLength} characters long`);
      default:
        throw new ValidationError(`Invalid ${this.#type} length`);
    }
  }

};
