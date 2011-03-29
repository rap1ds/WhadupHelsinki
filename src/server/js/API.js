var API;
API = {
  events: [
    {
      title: "Sample event"
    }
  ],
  get: {
    "/api": function(req, res) {
      console.log("GET /api");
      return res.send("Hello from API!");
    },
    "/api/events": function(req, res) {
      console.log("GET /api/events");
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