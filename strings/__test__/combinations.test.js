const {combinations} = require('../combinations');

function runTests() {
  // Helper function to log test results
  function assert(condition, message) {
    if (!condition) {
      console.error("Test failed:", message);
    } else {
      console.log("Test passed:", message);
    }
  }

  // Test 1: Basic test with an empty array
  assert(JSON.stringify(combinations([])) === JSON.stringify([[]]), "Test 1: Empty array should return [[]]");

  // Test 2: Single element array
  assert(JSON.stringify(combinations([1])) === JSON.stringify([[1]]), "Test 2: Single element array should return [[1]]");

  // Test 3: Two elements array
  const result2 = combinations([1, 2]);
  const expected2 = [[1, 2], [2, 1]];
  assert(JSON.stringify(result2) === JSON.stringify(expected2), "Test 3: Two elements array should return [[1,2], [2,1]]");

  // Test 4: Three elements array
  const result3 = combinations([1, 2, 3]);
  const expected3 = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 2, 1],
    [3, 1, 2]
  ];
  assert(JSON.stringify(result3) === JSON.stringify(expected3), "Test 4: Three elements array should return all permutations");

  // Test 5: Array with duplicate elements
  const result4 = combinations([1, 1, 2]);
  const expected4 = [
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
  ];
  assert(JSON.stringify(result4) === JSON.stringify(expected4), "Test 5: Array with duplicates should return correct permutations");

  // Test 6: Four elements array (larger test case)
  const result5 = combinations([1, 2, 3, 4]);
  const expectedCount5 = 24; // 4! = 24 permutations
  assert(result5.length === expectedCount5, "Test 6: Four elements array should return 24 permutations");

  // Test 7: Five elements array (even larger test case)
  const result6 = combinations([1, 2, 3, 4, 5]);
  const expectedCount6 = 120; // 5! = 120 permutations
  assert(result6.length === expectedCount6, "Test 7: Five elements array should return 120 permutations");
}

// Run all tests
runTests();
