import validateLength from "./validate-length";

const TITLE_MIN_LENGTH = 3;
const TITLE_MAX_LENGTH = 80;

export default function formatTodoTitle(title) {
  return validateLength(title.trim(), TITLE_MIN_LENGTH, TITLE_MAX_LENGTH);
}
