const { Trie } = require('../trie')

function runTests() {
  // Helper function to log test results
  function assert(condition, message) {
    if (!condition) {
      console.error("Test failed:", message);
    } else {
      console.log("Test passed:", message);
    }
  }

  // Create a new Trie instance
  const trie = new Trie();

  // Test 1: Insert and search a word
  trie.insert('apple');
  assert(trie.search('apple'), "Searching for 'apple' after inserting should return true.");
  assert(!trie.search('app'), "Searching for 'app' should return false (not a complete word).");

  // Test 2: StartsWith for existing prefixes
  trie.insert('banana');
  assert(trie.startsWith('ban'), "Starts with 'ban' should return true (banana starts with 'ban').");
  assert(trie.startsWith('app'), "Starts with 'app' should return true (apple starts with 'app').");
  assert(!trie.startsWith('band'), "Starts with 'band' should return false (banana does not start with 'band').");

  // Test 3: Insert shorter word and verify
  trie.insert('app');
  assert(trie.search('app'), "Searching for 'app' after inserting should return true.");

  // Test 4: wordsForPrefix returns correct results
  trie.insert('apricot');
  const wordsForApp = trie.wordsForPrefix('app');
  assert(
      JSON.stringify(wordsForApp) === JSON.stringify(['app', 'apple']),
      "wordsForPrefix('app') should return ['app', 'apple']."
  );

  const wordsForAp = trie.wordsForPrefix('ap');
  assert(
      JSON.stringify(wordsForAp) === JSON.stringify(['app', 'apple', 'apricot']),
      "wordsForPrefix('ap') should return ['app', 'apple', 'apricot']."
  );

  // Test 5: No words match the prefix
  const wordsForZ = trie.wordsForPrefix('z');
  assert(wordsForZ.length === 0, "wordsForPrefix('z') should return an empty array when no words match the prefix.");

  // Test 6: Limit on wordsForPrefix
  const words = [
    'apple', 'appetite', 'application', 'apricot', 'apparel', 'appoint', 'apartment',
    'appearance', 'appreciate', 'approval', 'approximate', 'aquarium', 'argue', 'arise',
    'arrow', 'art', 'article', 'artist', 'aspect', 'aspire', 'assume', 'astound', 'attack',
    'attempt', 'attend', 'attention', 'attitude', 'authority', 'available', 'avenue',
    'average', 'award', 'aware', 'awesome', 'awkward', 'bonus'
  ];
  words.forEach(word => trie.insert(word));

  const limitedWords = trie.wordsForPrefix('a');
  assert(limitedWords.length === 20, "wordsForPrefix should be limited to 20 results (MAX_COUNT).");
}

// Run all tests
runTests();
