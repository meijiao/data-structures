var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.counter = 0;
  // Use an object with numeric keys to store values
  obj.storage = {};

  return obj;
};

  // Implement the methods below
var stackMethods = {};
stackMethods.push = function(value) {
  this.counter++;
  this.storage[this.counter] = value;
};

stackMethods.pop = function() {
  var result = this.storage[this.counter];
  if (this.counter > 0) {
    this.counter--;
  }
  return result;
};

stackMethods.size = function() {
  return this.counter;
};

