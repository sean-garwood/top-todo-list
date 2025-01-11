import Statuses from 'Constants/statuses';

export default class Status {
  constructor() {
    this.status = Statuses.NOT_STARTED;
  }

  get status() {
    return this._status;
  }
  set status(value) {
    this._status = value;
  }
}
