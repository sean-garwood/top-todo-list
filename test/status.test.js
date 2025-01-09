import Status from 'SharedComponents/status';
import Statuses from "Constants/statuses";
import validStatus from "./__mocks__/status-mock";

describe('Status', () => {
  it('should default to not started status', () => {
    expect(validStatus.status).toEqual(Statuses.NOT_STARTED);
  });
});
