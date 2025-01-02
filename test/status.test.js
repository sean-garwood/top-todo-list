import Status from '../src/scripts/components/shared/status.js';
import Statuses from "../src/scripts/constants/statuses.js";
import validStatus from "./__mocks__/status-mock.js";

describe('Status', () => {
  it('should default to not started status', () => {
    expect(validStatus.status).toEqual(Statuses.NOT_STARTED);
  });
});
