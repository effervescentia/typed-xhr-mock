import test = require('blue-tape');

import xhrMock = require('xhr-mock');

test('xhr-mock exists', (t) => {
  t.plan(3);
  t.notEqual(xhrMock, undefined);

  t.notEqual(xhrMock.mock, undefined);
  t.notEqual(xhrMock.delete, undefined);
});
