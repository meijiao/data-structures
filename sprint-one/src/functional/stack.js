// Time Complexity:
// push, pop: constant O(1)
// search: linear O(n)
//
var Stack = function() {
  var someInstance = {};
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    counter++;
    storage[counter] = value;
  };

  someInstance.pop = function() {
    var result = storage[counter];
    if (counter > 0) {
      counter--;
    }
    return result;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
