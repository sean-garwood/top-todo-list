import validateLength from "./validate-length";
export default function formatTodoTitle(title) {
  return validateLength(title.trim());
}
