var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.  
  // Use an object with numeric keys to store values
  // var instance = Object.create(queueMethods);
  this.storage = {};
  // return instance;
};

// var queueMethods = {};

Queue.prototype.enqueue = function(value) {
  var key = Object.keys(this.storage).length;
  this.storage[key] = value;
};

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
