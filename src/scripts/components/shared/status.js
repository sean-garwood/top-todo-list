import Statuses from "Constants/statuses";

export default class Status {
  constructor(status = Statuses.INCOMPLETE) {
    this.status = status;
  }

  get status() {
    return this._status;
  }
  set status(value) {
    this._status = value;
  }
}
