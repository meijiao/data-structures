var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

// time complexity: constant, O(1)
setPrototype.add = function(item) {
  this._storage[item] = item;
};

// time complexity: constant, O(1)
setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item) === true; 
};

// time complexity: constant, O(1)
setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
