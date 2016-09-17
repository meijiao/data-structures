var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

// Time complexity: Constant O(n)
treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};
// Time complexity: Linear O(n)
treeMethods.contains = function(target) {
  var result = false;
  var find = function(child) {
    if (child.value === target) {
      result = true;
    }
    for (var i = 0; i < child.children.length; i++) {
      find(child.children[i]);
    }
  };
  find(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
