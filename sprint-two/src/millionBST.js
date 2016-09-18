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

// BinarySearchTree.prototype.contains = function(target) {
//   // time complexity: logarithmic O(log n)
//   var result;
//   var walkTree = function (node) {
//     if (node.value === target) {
//       result = true;
//       return;
//     }
//     if (node.left === undefined && node.right === undefined) {
//       result = false;
//       return;
//     }
//     if (node.value < target) {
//       walkTree(node.right);
//     }
//     if (node.value > target) {
//       walkTree(node.left);
//     }
//   };
//   walkTree(this);
//   return result;
// };

// BinarySearchTree.prototype.depthFirstLog = function(cb) {
//   // time complexity: linear O(n)

//   // Helper function to go deeper on each node
//   var goDeeper = function (node) {
//     // if node exists
//     if (node) {
//       // execute callback on node
//       cb(node.value);
//     }
//     // check if there's a left node
//     if (node.left) {
//       // go deeper on left node (recurse)
//       goDeeper (node.left);
//     }
//     // check if there's a right node
//     if (node.right) {
//       // go deeper on right node (recurse)
//       goDeeper (node.right);
//     }
//     // if left node is empty, return
//     if (!node.left) {
//       return;
//     }
//     // if right is empty, return
//     if (!node.right) {
//       return;
//     }
//   };

//   goDeeper(this);

// };
// -------------------------------------------------------------------------------------








