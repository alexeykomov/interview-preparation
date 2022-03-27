function QueueNode(treeNode) {
  this.next = null;
  this.val = treeNode;
}

const levelTerminator = new TreeNode(null, null, null);

class BFSQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(treeNode) {
    const node = new QueueNode(treeNode);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    const oldTail = this.tail;
    oldTail.next = node;
    this.tail = node;
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }
    if (this.head === this.tail) {
      const oldHead = this.head;
      this.head = null;
      this.tail = null;
      return oldHead;
    }
    const oldHead = this.head;
    this.head = oldHead.next;
    return oldHead.val;
  }

  isEmpty() {
    return this.head == null && this.tail == null;
  }
}

let rtl = false;

const bfs = (root, queue, output) => {
  queue.enqueue(root);
  queue.enqueue(levelTerminator);
  output.push([root.val]);

  while (!queue.isEmpty()) {
    const nextNode = queue.dequeue();
    if (nextNode === levelTerminator) {
      if (queue.isEmpty()) {
        break;
      }
      output.push([]);
      queue.enqueue(levelTerminator);
      rtl = !rtl;
      continue;
    }
    output[output.length - 1].push(nextNode.val);
    if (rtl) {
      if (nextNode.right !== null) { queue.enqueue(nextNode.right); }
      if (nextNode.left !== null) { queue.enqueue(nextNode.left); }
    } else {
      if (nextNode.left !== null) { queue.enqueue(nextNode.left); }
      if (nextNode.right !== null) { queue.enqueue(nextNode.right); }
    }
  }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(xroot) {
  const queue = new BFSQueue();
  const output = [];
  bfs(xroot, queue, output);
  return output;
};


zigzagLevelOrder({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
    },
    right: {
      val: 7,

    }
  }
})
