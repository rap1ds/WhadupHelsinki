var API;
API = (function() {
  function API() {
    this.get = {
      "/api": function(req, res) {
        return res.send("Hello from API!");
      },
      "/events": function(req, res) {
        return res.send("Events");
      }
    };
    this.post = {};
  }
  return API;
})();
module.exports = API;