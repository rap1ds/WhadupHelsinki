var API;
API = {
  events: [],
  get: {
    "/api": function(req, res) {
      return res.send("Hello from API!");
    },
    "/api/events": function(req, res) {
      return res.send(API.events);
    }
  },
  post: {
    "/api/events": function(req, res) {
      API.events.push(req.body);
      return res.send(201);
    }
  }
};
module.exports = API;