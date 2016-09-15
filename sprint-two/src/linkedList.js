var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      var newNode = Node(value);
      list.head = newNode;
      list.tail = newNode;
    } else {
      var previous = list.tail;
      var newNode = Node(value);
      previous.next = newNode;
      list.tail = newNode;
    }
    // console.info('AddToTail' + value + ': list is now: ', list);
  };

  list.removeHead = function() {
    var newHead = list.head.next;
    list.head = newHead;
    // console.info('removeHead: list is now: ', list);
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
