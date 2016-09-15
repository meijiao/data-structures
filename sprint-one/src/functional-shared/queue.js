var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  
  // Use an object with numeric keys to store values
  queueMethods.storage = {};
  _.extend(instance, queueMethods);
  
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var key = Object.keys(this.storage).length;
  this.storage[key] = value;
};

queueMethods.dequeue = function() {
  var first = this.storage[0];
  delete this.storage[0];

  var length = Object.keys(this.storage).length;
  for (var i = 0; i < length; i ++) {
    if (i < length) {
      this.storage[i] = this.storage[i + 1]; 
    }
  }
  delete this.storage[length];
  return first;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
