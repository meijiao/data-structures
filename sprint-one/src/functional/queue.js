var Queue = function () {
  var someInstance = {};
  
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

// Time complexity: Constant O(1)
  someInstance.enqueue = function(value) {
    var key = Object.keys(storage).length;
    console.log ('key ', key);
    storage[key] = value;
  };

// Time complexity: Constant O(n)
  someInstance.dequeue = function() {
    console.log ('storage before dequeue: ', storage);
    var first = storage[0];
    delete storage[0];

    var length = Object.keys(storage).length;
    for (var i = 0; i < length; i ++) {
      if (i < length) {
        storage[i] = storage[i + 1]; 
      }
    }
    delete storage[length];

    console.log ('first: ', first);
    console.log ('storage after dequeue: ', storage);
    return first;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

