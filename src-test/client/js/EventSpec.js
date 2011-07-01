(function() {
  describe("Event model", function() {
    it("contains title", function() {
      var event;
      event = new whadup.Event({
        title: "Foo Fighters"
      });
      return (expect(event.get('title'))).toEqual("Foo Fighters");
    });
    return it("contains default title", function() {
      var event;
      event = new whadup.Event;
      return (expect(event.get('title'))).toEqual("New event");
    });
  });
}).call(this);
