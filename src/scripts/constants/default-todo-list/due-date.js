import { addDays } from "date-fns";
import dueDate from "Components/shared/due-date.js";
const defaultDueDate = addDays(new dueDate(), 7);

export default defaultDueDate;
