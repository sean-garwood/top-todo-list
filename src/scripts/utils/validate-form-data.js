import { Title, Description, DueDate, Notes, Priority } from 'SharedComponents/shared';

/*
 * Validate form data
 *
 * the shared components all validate their own data, so we just need to check
 * if the data is valid by ensuring component.error is empty
 */

export default class ValidateFormData {
  static validate(title, description, dueDate, notes, priority) {
    const titleComponent = new Title(title);
    const descriptionComponent = new Description(description);
    const dueDateComponent = new DueDate(dueDate);
    const notesComponent = new Notes(notes);
    const priorityComponent = new Priority(priority);

    return titleComponent.error === '' &&
      descriptionComponent.error === '' &&
      dueDateComponent.error === '' &&
      notesComponent.error === '' &&
      priorityComponent.error === '';
  }

}
