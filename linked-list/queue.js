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

module.exports = {
  Queue
}
