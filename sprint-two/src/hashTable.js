

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketList = this._storage.get(index);
  var tuple = [k, v];
  if (bucketList) {
    bucketList.push(tuple);
  } else {
    bucketList = [];
    this._storage.set(index, bucketList);
    bucketList.push(tuple);
  }
  console.log('this._storage ', this._storage.get(index));
  console.log('bucketList ', bucketList);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketList = this._storage.get(index);
  var result;
  bucketList.forEach(function(tuple) {
    if (tuple[0] === k) {
      result = tuple[1];
    } 
  }); 
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketList = this._storage.get(index);
  
  bucketList.forEach(function(tuple, index) {
    if (tuple[0] === k) {
      bucketList.splice(index, 1);
    }
  }); 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


