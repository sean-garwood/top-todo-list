import { messages as lengthMessages } from './validation/length';
import { types as errorTypes } from '../types';
export default class ValidationErrorMessage {
  #types;
  constructor() {
    this.type = getErrorType();
    this.message = getErrorMessage();
  };


}
