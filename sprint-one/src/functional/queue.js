// var Queue = function () {
//   var someInstance = {};
//   var counter = 0;
//   var next = 0;
//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below

//   someInstance.enqueue = function(value) {
//     storage[counter] = value;
//     counter ++;
//     console.log ('enqueing now: ', counter, ': ', counter, ' storage[counter]: ', storage[counter]);
//   };

//   someInstance.dequeue = function() {
//     console.log ('dequeing now: ', counter, ': ', counter, ' storage[counter]: ', storage[counter]);
//     //debugger;
//     var result = storage[next];
//     if (counter > 0) {
//       counter --;
//     }
//     delete storage[counter];
//     next ++;
//     return result;
//   };

//   someInstance.size = function() {
//     return counter;
//   };

//   return someInstance;
// };

// // for (var prop in storage) {

// //}

var Queue = function () {
  var someInstance = {};
  
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = Object.keys(storage).length;
    console.log ('key ', key);
    storage[key] = value;
  };

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
    console.log ('first: ', first);
    console.log ('storage after dequeue: ', storage);
    return first;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

