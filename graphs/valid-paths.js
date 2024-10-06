class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.front = null; // Points to the front of the queue (head of the linked list)
    this.rear = null;  // Points to the rear of the queue (tail of the linked list)
    this.length = 0;   // Keeps track of the size of the queue
  }

  // Enqueue (add item to the end of the queue)
  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = this.rear = newNode; // If the queue is empty, both front and rear point to the new node
    } else {
      this.rear.next = newNode; // Add the new node after the current rear
      this.rear = newNode;      // Update the rear to the new node
    }
    this.length++;
  }

  // Dequeue (remove item from the front of the queue)
  dequeue() {
    if (this.isEmpty()) {
      return null; // Or throw an error if you prefer
    }

    const dequeuedNode = this.front;
    this.front = this.front.next; // Move the front pointer to the next node

    if (!this.front) {
      this.rear = null; // If the queue becomes empty, set rear to null as well
    }

    this.length--;
    return dequeuedNode.value; // Return the value of the dequeued node
  }

  // Peek (return the front element without removing it)
  peek() {
    if (this.isEmpty()) {
      return null; // Or throw an error if you prefer
    }
    return this.front.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.length;
  }

  // Clear the queue
  clear() {
    this.front = this.rear = null;
    this.length = 0;
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  const graph = adjacencyListFromEdges(edges);

  const queue = new Queue();

  queue.enqueue(source);
  const visited = new Set();
  visited.add(source);
  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    if (current === destination) {
      return true;
    }

    for (const node of graph[current]) {
      if (!visited.has(node)) {
        queue.enqueue(node);
        visited.add(node)
      }
    }
  }
  return false;
};

const adjacencyListFromEdges = (edges) => {
  const adjacencyList = new Map();
  for (const edge of edges) {
    if (!adjacencyList.has(edge[0])) {
      adjacencyList.set(edge[0], [])
    }
    if (!adjacencyList.has(edge[1])) {
      adjacencyList.set(edge[1], [])
    }
    adjacencyList.get(edge[1]).push(edge[0])
    adjacencyList.get(edge[0]).push(edge[1])
  }
  return adjacencyList;
}

console.log(validPath(10, [[4,3],[1,4],[4,8],[1,7],[6,4],[4,2],[7,4],[4,0],[0,9],[5,4]], 5, 9));
// console.log(validPath(10, [[2,9],[7,8],[5,9],[7,2],[3,8],[2,8],[1,6],[3,0],[7,0],[8,5]], 1, 0));
// console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2));
// console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5));
// console.log(validPath(5, [[0,4]], 0, 4));




