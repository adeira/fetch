// @flow

import setPrototypeOf from './setPrototypeOf';

type ResponseErrorType = $ReadOnly<{
  ...Error,
  +response: Response,
  ...
}>;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
 */
function ResponseError(this: any, response: Response, message?: string): ResponseErrorType {
  const instance = new Error(message);

  // $FlowExpectedError[prop-missing]: property 'error.response' is unknown in Error (but that's fine, we are extending here)
  instance.response = response;
  /* $FlowFixMe[class-object-subtyping] This comment suppresses an error when
   * upgrading Flow to version 0.153.0. To see the error delete this comment
   * and run Flow. */
  setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, ResponseError);
  }

  // $FlowExpectedError[prop-missing]: property 'error.response' is unknown in Error (but that's fine, we are extending here)
  /* $FlowFixMe[class-object-subtyping] This comment suppresses an error when
   * upgrading Flow to version 0.153.0. To see the error delete this comment
   * and run Flow. */
  return instance;
}

ResponseError.prototype = (Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true,
  },
}): { constructor: typeof Error, ... });

/* $FlowFixMe[incompatible-function-indexer] This comment suppresses an error
 * when upgrading Flow. To see the error delete this comment and run Flow. */
setPrototypeOf(ResponseError, Error);

export default ResponseError;
