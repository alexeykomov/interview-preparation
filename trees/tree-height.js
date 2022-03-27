const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', makeReadLine());

function makeReadLine() {
  let lineСounter = 0;
  let size;
  let parentIndexes;

  return function readLine(line) {
    if (line !== '\n') {
      switch (lineСounter) {
        case 0: {
          size = parseInt(line, 0);
          lineСounter++;
        };break;
        case 1: {
          parentIndexes = line.split(' ').map(s => parseInt(s, 10));
          console.log(computeTreeHeight(makeTree(parentIndexes)));
          process.exit();
        };break;
        default:break;
      }
    }
  }
}

function makeTree(aParentIndexes) {
  const nodes = aParentIndexes.map(aParentIndexes => new Node());
  let root;
  aParentIndexes.forEach((parentIndex, currentIndex) => {
    if (parentIndex === -1) {
      root = nodes[currentIndex];
    } else {
      nodes[parentIndex].children.push(nodes[currentIndex]);
    }
  });
  return root;
}

class Node {
  constructor() {
    this.children = [];
  }
}

function computeTreeHeight(aTree) {
  const queue = new Queue();
  let maxHeight = 0;

  if (aTree) {
    queue.enqueue(aTree);
    queue.enqueue('LEVEL_END');
  }

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    if (node === 'LEVEL_END') {
      maxHeight++;
      if (!queue.isEmpty()) {
        queue.enqueue('LEVEL_END');
      } else {
        break;
      }
    } else if (node.children.length) {
      node.children.forEach(aNode => {
        queue.enqueue(aNode);
      });
    }
  }

  return maxHeight;
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head == null && this.tail == null;
  }

  enqueue(aValue) {
    const node = new QueueNode(aValue);
    if (this.isEmpty()) {
      this.tail = this.head = node;
    } else {
      const oldTail = this.tail;
      oldTail.next = node;
      node.prev = oldTail;

      this.tail = node;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else {
      const oldHead = this.head;
      if (oldHead.next) {
        this.head = oldHead.next;
        this.head.prev = null;
      } else {
        this.tail = this.head = null;
      }
      return oldHead.value;
    }
  }
}

class QueueNode {
  constructor(aValue) {
    this.prev = null;
    this.next = null;
    this.value = aValue;
  }
}
