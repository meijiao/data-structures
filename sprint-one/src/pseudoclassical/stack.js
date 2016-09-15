var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  // Use an object with numeric keys to store values
  this.storage = {};
};

  // Implement the methods below

Stack.prototype.push = function(value) {
  this.counter++;
  this.storage[this.counter] = value;
};

Stack.prototype.pop = function() {
  var result = this.storage[this.counter];
  if (this.counter > 0) {
    this.counter--;
  }
  return result;
};

Stack.prototype.size = function() {
  return this.counter;
};