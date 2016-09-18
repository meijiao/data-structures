var BinarySearchTree = function(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype.insert = function(val) {
  // time complexity: logarithmic: O(log n)
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
  // time complexity: logarithmic O(log n)
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

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // time complexity: linear O(n)

  // Helper function to go deeper on each node
  var goDeeper = function (node) {
    // if node exists
    if (node) {
      // execute callback on node
      cb(node.value);
    }
    // check if there's a left node
    if (node.left) {
      // go deeper on left node (recurse)
      goDeeper (node.left);
    }
    // check if there's a right node
    if (node.right) {
      // go deeper on right node (recurse)
      goDeeper (node.right);
    }
    // if left node is empty, return
    if (!node.left) {
      return;
    }
    // if right is empty, return
    if (!node.right) {
      return;
    }
  };

  goDeeper(this);

};
// -------------------------------------------------------------------------------------
var limit = 1000000;
//const limit = 10;
var bigArr = Array.from(new Array(limit), x => Math.floor(Math.random() * limit + 1));
//const bigArr = [ 5, 4, 10, 8, 1, 3, 9, 6, 555, 10, 556 ];
// console.log(bigArr);

var tree = new BinarySearchTree(0);
bigArr.forEach(item => tree.insert(item));

var closestNumInBST = function(target, inputTree) {
  // debugger;
  var findClosest = function(node) {
    if (node.value === target) {
      return node.value;
    }
    if (!node.left && !node.right) {
      return node.value;
    }
    if (target > node.value) {
      if (node.right) {
        return findClosest(node.right);
      }
    } 
    if (target < node.value) {
      if (node.left) {
        return findClosest(node.left);
      }
    }
  };

  return findClosest(inputTree);
};

console.log('closest num is: ', closestNumInBST(556, tree));






