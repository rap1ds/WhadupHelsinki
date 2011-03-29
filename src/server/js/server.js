var API, app, callback, express, route, _ref, _ref2;
var __hasProp = Object.prototype.hasOwnProperty;
express = require('express');
app = express.createServer();
API = require('./API');
app.configure(function() {
  app.use(express.static(__dirname + '/../../client/public'));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  return app.use(express.bodyParser());
});
_ref = API.get;
for (route in _ref) {
  if (!__hasProp.call(_ref, route)) continue;
  callback = _ref[route];
  app.get(route, callback);
}
_ref2 = API.post;
for (route in _ref2) {
  if (!__hasProp.call(_ref2, route)) continue;
  callback = _ref2[route];
  app.post(route, callback);
}
app.listen(4000);