// @flow

import Deferred from '../__tests__/Deferred';

// $FlowExpectedError[signature-verification-failure]
const fetch = jest.fn((): Promise<any> => {
  const deferred = new Deferred();
  // $FlowExpectedError[prop-missing]: intentionally ignoring Flow here
  fetch.mock.deferreds.push(deferred);
  return deferred.getPromise();
});

// $FlowExpectedError[prop-missing]: intentionally ignoring Flow here
fetch.mock.deferreds = [];

module.exports = fetch;
