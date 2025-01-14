import TextValidator from "Validators/text-validator";
export default class Description {
  constructor(description) {
    const validationError = TextValidator.validate(description, "Description");
    if (validationError) {
      this.error = validationError;
    } else {
      this.description = description;
    }
  }
}
