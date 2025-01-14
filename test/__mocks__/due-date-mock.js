import DueDate from "../../src/scripts/components/shared/due-date";

const mockValidDueDate = new DueDate(new Date(2026, 11, 31)).dueDate;
const mockPastDueDate = new Date(2020, 11, 31);

export { mockPastDueDate, mockValidDueDate };
