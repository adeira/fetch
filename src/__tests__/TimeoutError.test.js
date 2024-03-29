// @flow

import { TimeoutError } from '../fetchWithRetries';

it('is instance of Error and TimeoutError', () => {
  /* $FlowFixMe[invalid-constructor] This comment suppresses an error when
   * upgrading Flow to version 0.176.0. To see the error delete this comment
   * and run Flow. */
  const error = new TimeoutError('ups');
  expect(error).toBeInstanceOf(Error);
  /* $FlowFixMe[incompatible-call] This comment suppresses an error when
   * upgrading Flow. To see the error delete this comment and run Flow. */
  expect(error).toBeInstanceOf(TimeoutError);
});

it('is throwable', () => {
  expect(() => {
    /* $FlowFixMe[invalid-constructor] This comment suppresses an error when
     * upgrading Flow to version 0.176.0. To see the error delete this comment
     * and run Flow. */
    throw new TimeoutError('ups');
  }).toThrow('ups');
});
