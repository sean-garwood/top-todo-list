import { format } from "date-fns";

function formatDate(date) {
  return format(date, "MM/dd/yyyy");
}

function formatDateForForm(date) {
  return format(date, "yyyy-MM-dd");
}

export { formatDate, formatDateForForm };
