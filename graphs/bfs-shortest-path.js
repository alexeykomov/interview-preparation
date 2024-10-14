const { Queue } = require("../linked-list/queue");

function bfsShortestPath(adjList, start, target) {
  const queue = new Queue();
  const visited = new Set();

  queue.enqueue([start]); // Queue stores paths
  visited.add(start);

  while (!queue.isEmpty()) {
    const path = queue.dequeue(); // Get the path from the front of the queue
    const node = path[path.length - 1]; // Get the last node in the current path

    if (node === target) {
      return path; // Return the path if the target is found
    }

    // Explore all neighbors of the current node
    for (const neighbor of adjList[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        const newPath = [...path, neighbor]; // Create a new path including the neighbor
        queue.enqueue(newPath); // Add the new path to the queue
      }
    }
  }

  return null; // Return null if no path to the target is found
}

// Example Usage:
const adjList = {
  0: [1, 2],
  1: [0, 3],
  2: [0, 4],
  3: [1],
  4: [2],
};

console.log(bfsShortestPath(adjList, 0, 3)); // Output: [0, 1, 3]
