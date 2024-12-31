import Statuses from '../../constants/statuses';

export default class Status {
  constructor(status) {
    this.status = Statuses.NOT_STARTED;
  }
  _validate(status) {
    if (!Object.values(Statuses).includes(status)) {
      throw new Error('The status is invalid.');
    }
    return status;
  }
}
