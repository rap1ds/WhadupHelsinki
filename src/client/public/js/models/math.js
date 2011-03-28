(function() {
  window.square = function(x) {
    return x * x;
  };
  window.cube = function(x) {
    return square(x) * x;
  };
}).call(this);
