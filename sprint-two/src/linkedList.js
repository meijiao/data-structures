var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      var newNode = Node(value);
      list.head = newNode;
      list.tail = newNode;
    }
    if (list.tail) {
      var previous = list.tail;
      var newNode = Node(value);
      previous.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
