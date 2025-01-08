import { addDays } from "date-fns";
import dueDate from "../../components/shared/due-date.js";
const defaultDueDate = addDays(new dueDate(), 7);

export default defaultDueDate;
