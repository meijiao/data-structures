var Queue = function () {
  var someInstance = {};
  var counter = 0;
  var next = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter ++;
    storage[counter] = value;
  };

  someInstance.dequeue = function() {
    var result = storage[next];
    if (counter > 0) {
      counter --;
    }
    delete storage[counter];
    next ++;
    return result;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
