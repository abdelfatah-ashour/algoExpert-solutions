// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function middleNode(linkedList) {
  let count = 0;
  let currentNode = linkedList;
  let newIndex = 0;

  if (!currentNode.next) return currentNode;

  while (currentNode) {
    currentNode = currentNode.next;
    count++;
  }

  let middleNode = linkedList;

  for (let index = 0; index < Math.floor(count / 2); index++) {
    middleNode = middleNode.next;
  }

  return middleNode;
}

// Do not edit the line below.
exports.middleNode = middleNode;
