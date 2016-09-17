var BinarySearchTree = function(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype.insert = function(val) {
  //debugger;
  var newNode = new BinarySearchTree(val);

  var findNode = function(node) {
    if (val > node.value) {
      if (node.right) {
        findNode(node.right);
      } else {
        node.right = newNode;
        return;
      }
    } 
    if (val < node.value) {
      if (node.left) {
        findNode(node.left);
      } else {
        node.left = newNode;
        return;
      }
    }
  }; 

  findNode(this);
};

BinarySearchTree.prototype.contains = function(target) {
  var result;
  var walkTree = function (node) {
    if (node.value === target) {
      result = true;
      return;
    }
    if (node.left === undefined && node.right === undefined) {
      result = false;
      return;
    }
    if (node.value < target) {
      walkTree(node.right);
    }
    if (node.value > target) {
      walkTree(node.left);
    }
  };
  walkTree(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
