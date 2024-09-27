/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

function TrieNode() {
  this.children = new Map();
  this.endOfWord = false;
  this.parent = null;
  this.letter = '';
}

function Trie() {
  this.root = new TrieNode();
}

Trie.prototype.insert = function (word) {
  let node = this.root;
  for (const letter of word) {

    if (!node.children.has(letter)) {
      const parent = node;
      node.children.set(letter, node = new TrieNode());
      node.parent = parent;
      node.letter = letter;
      continue;
    }
    node = node.children.get(letter);
  }
  node.endOfWord = true;
}

Trie.prototype.search = function (word) {
  let node = this.root;
  for (const letter of word) {
    if (!node.children.has(letter)) {
      return false
    }
    node = node.children.get(letter);
  }
  return node.endOfWord;
}

Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (const letter of prefix) {
    if (!node.children.has(letter)) {
      return false
    }
    node = node.children.get(letter);
  }
  return true;
}

Trie.prototype.nodeForPrefix_ = function (prefix) {
  let node = this.root;
  for (const letter of prefix) {
    if (!node.children.has(letter)) {
      return null
    }
    node = node.children.get(letter);
  }
  return node;
}

Trie.prototype.wordsForPrefix = function (prefix) {
  const lastLetterNode = this.nodeForPrefix_(prefix);
  if (!lastLetterNode) {
    return [];
  }
  const res = [];
  const stack = [lastLetterNode];
  let count = 0;
  while (stack.length) {
    const node = stack.pop();
    if (node.endOfWord) {
      res.push(stringFromNodes(node))
      count++;
      if (count === MAX_COUNT) {
        return res;
      }
    }
    for (const [letter, child] of node.children) {
      stack.push(child);
    }
  }
  return res;
}

Trie.prototype.printTrie = function () {
  const queue = [{ node: this.root, level: 0 }];

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    // Print the node (skip root as it doesn't have a letter)
    if (node.letter) {
      console.log(' '.repeat(level * 2) + node.letter + (node.endOfWord ? '*' : ''));
    }

    // Enqueue all children
    for (const [letter, child] of node.children) {
      queue.push({ node: child, level: level + 1 });
    }
  }
};

const MAX_COUNT = 20;

const stringFromNodes = (startNode) => {
  const buffer = [];
  let node = startNode;
  while (node) {
    buffer.push(node.letter);
    node = node.parent;
  }
  buffer.reverse()
  return buffer.join('');
}

module.exports = {
  Trie
}
