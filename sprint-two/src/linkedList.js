var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // time complexity: constant O(1)
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

  // time complexity: constant O(1)
  list.removeHead = function() {
    var oldHeadVal = list.head.value;
    var newHead = list.head.next;
    list.head = newHead;
    return oldHeadVal;
    // console.info('removeHead: list is now: ', list);
  };

  // time complexity: linear, O(n)
  list.contains = function(target) {
    var curr = list.head;
    while (curr.value !== target) {
      if (curr.next === null) {
        return false;
      }
      curr = curr.next;
    }
    return true;
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
