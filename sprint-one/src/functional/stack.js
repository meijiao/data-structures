var Stack = function() {
  var someInstance = {};
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    counter++;
  };

  someInstance.pop = function() {
    counter--;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
