var API;
API = (function() {
  function API() {
    this.get = {
      "/api": function(req, res) {
        return res.send("Hello from API!");
      },
      "/api/events": function(req, res) {
        return res.send([
          {
            title: "Foo Fighters"
          }, {
            title: "Maalaismarkkinat"
          }
        ]);
      }
    };
    this.post = {};
  }
  return API;
})();
module.exports = API;