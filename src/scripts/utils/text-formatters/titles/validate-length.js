const MIN_LENGTH = 3;
const MAX_LENGTH = 80;


function getLengthValidationErrorMessage(title) {
  if (isTooShort(title)) {
    return `Title must be at least ${MIN_LENGTH} characters long`;
  }
  if (isTooLong(title)) {
    return `Title must be at most ${MAX_LENGTH} characters long`;
  }
  return '';

  function isTooShort(title) {
    return title.length < MIN_LENGTH;
  }

  function isTooLong(title) {
    return title.length > MAX_LENGTH;
  }
}

export default function validateLength(title) {
  const errorMessage = getLengthValidationErrorMessage(title);
  if (errorMessage) {
    throw new Error(errorMessage);
  }
  return title;
}
