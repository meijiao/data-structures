var limit = 2000000;
//const limit = 10;
var bigArr = Array.from(new Array(limit), x => Math.floor(Math.random() * limit + 1));
//const bigArr = [ 5, 4, 10, 8, 1, 3, 9, 6, 555, 10, 556 ];
// console.log(bigArr);

var tree = new BinarySearchTree(0);
console.log (tree);
bigArr.forEach(item => tree.insert(item));
