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




/*
 * Complexity: What is the time complexity of the above functions?
 */
