var closestNumInBST = function(target, inputTree) {
  // debugger;
  var result;
  var findClosest = function(node) {
    if (node.value === target) {
      result = node.value;
    }
    if (!node.left && !node.right) {
      result = node.value;
    }
    if (target > node.value) {
      if (node.right) {
        findClosest(node.right);
      }
    } 
    if (target < node.value) {
      if (node.left) {
        findClosest(node.left);
      }
    }
  };

  findClosest(inputTree);
  return result;
};

console.log('closest num is: ', closestNumInBST(556, tree));