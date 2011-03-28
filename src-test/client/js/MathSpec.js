(function() {
  describe("Mathematic helper function", function() {
    it("counts squere", function() {
      return (expect(square(2))).toEqual(4);
    });
    return it("counts cube", function() {
      return (expect(cube(3))).toEqual(27);
    });
  });
}).call(this);
