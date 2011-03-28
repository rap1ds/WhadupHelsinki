(function() {
  var API;
  API = require('../../../src/server/js/API');
  describe("API", function() {
    beforeEach(function() {
      this.api = new API;
      this.req = {};
      this.res = {
        send: function() {}
      };
      return spyOn(this.res, 'send');
    });
    return it("returns hello world for '/api'", function() {
      var callback, expectedResponse, route;
      route = "/api";
      callback = this.api.get[route];
      expectedResponse = "Hello from API!";
      callback(this.req, this.res);
      return (expect(this.res.send.mostRecentCall.args[0])).toEqual(expectedResponse);
    });
  });
}).call(this);
