const { Queue } = require("../linked-list/queue");

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
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
        visited.add(node);
      }
    }
  }
  return false;
};

const adjacencyListFromEdges = (edges) => {
  const adjacencyList = new Map();
  for (const edge of edges) {
    if (!adjacencyList.has(edge[0])) {
      adjacencyList.set(edge[0], []);
    }
    if (!adjacencyList.has(edge[1])) {
      adjacencyList.set(edge[1], []);
    }
    adjacencyList.get(edge[1]).push(edge[0]);
    adjacencyList.get(edge[0]).push(edge[1]);
  }
  return adjacencyList;
};

console.log(
  validPath(
    10,
    [
      [4, 3],
      [1, 4],
      [4, 8],
      [1, 7],
      [6, 4],
      [4, 2],
      [7, 4],
      [4, 0],
      [0, 9],
      [5, 4],
    ],
    5,
    9,
  ),
);
// console.log(validPath(10, [[2,9],[7,8],[5,9],[7,2],[3,8],[2,8],[1,6],[3,0],[7,0],[8,5]], 1, 0));
// console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2));
// console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5));
// console.log(validPath(5, [[0,4]], 0, 4));
