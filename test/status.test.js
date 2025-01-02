import Status from '../src/scripts/components/shared/status';
import Statuses from "../src/scripts/constants/statuses";
import validStatus from "./__mocks__/status-mock";

describe('Status', () => {
  it('should default to not started status', () => {
    expect(validStatus.status).toEqual(Statuses.NOT_STARTED);
  });
});
