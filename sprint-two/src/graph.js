

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var node = {};
  node.value = value;
  node.edges = [];
  this.storage.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  var result = false;
  this.storage.forEach(function(node) {
    if (node.value === value) {
      result = true;
    }
  });
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  var instance = this;
  this.storage.forEach(function(node, index) {
    if (node.value === value) {
      instance.storage.splice(index, 1);
    }
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  var index = this.getNodeIndex(fromNode);
  if (this.storage[index].edges.indexOf(toNode) > -1) {
    result = true;
    console.log('found the edge');
  } 
  return result;
};

Graph.prototype.getNodeIndex = function(val) {
  var result;
  this.storage.forEach(function(node, index) {
    if (node.value === val) {
      result = index;
    }
  });
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var instance = this;
  var addEdgeToPartner = function(val, fromNode) {
    instance.storage.forEach(function(node) {
      if (val === node.value) {
        node.edges.push(fromNode);
      }
    });
  };
  this.storage.forEach(function(node) {
    if (node.value === fromNode) {
      node.edges.push(toNode);
      addEdgeToPartner(toNode, fromNode);
    }
  });
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


