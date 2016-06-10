import test = require('blue-tape');

import xhrMock = require('xhr-mock');

// import xhrMock = require('xhr-mock');

test('xhr-mock exists', (t) => {
  t.plan(3);
  t.notEqual(xhrMock, undefined);
  // let Server = nodeStatic.Server;

  t.notEqual(xhrMock.mock, undefined);
  t.notEqual(xhrMock.delete, undefined);
  // t.notEqual(staticServer, undefined);
});
