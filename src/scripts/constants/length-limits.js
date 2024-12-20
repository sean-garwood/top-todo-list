import DescriptionLimits from './length-limits/description-limits';
import NotesLimits from './length-limits/notes-limits';
import TitleLimits from './length-limits/title-limits';

export default class LengthLimits {
  static Description = DescriptionLimits;
  static Notes = NotesLimits;
  static Title = TitleLimits;
}
