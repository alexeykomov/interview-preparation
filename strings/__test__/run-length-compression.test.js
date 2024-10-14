const { runLengthCompression } = require('../run-length-compression');

function runTests() {
  // Helper function to log test results
  function assert(actual, expected, message) {
    if (actual !== expected) {
      console.error(`Test failed: ${message}`);
      console.error(`  Expected: ${expected}`);
      console.error(`  Actual:   ${actual}`);
    } else {
      console.log(`Test passed: ${message}`);
    }
  }

  // Test 1: Basic test with an empty string
  assert(runLengthCompression(''), '', "Test 1: Empty string should return an empty string");

  // Test 2: String with single character repeated multiple times
  assert(runLengthCompression('AAA'), 'A3', "Test 2: String 'AAA' should return 'A3'");

  // Test 3: String with multiple characters, some repeated
  assert(runLengthCompression('AAABBBCCXYZDDDDEEEFFFB'), 'A3B3C2XYZD4E3F3B', "Test 3: 'AAABBBCCXYZDDDDEEEFFFB' should return 'A3B3C2XYZD4E3F3B'");

  // Test 4: String with no repeated characters
  assert(runLengthCompression('ABCDEF'), 'ABCDEF', "Test 4: 'ABCDEF' should return 'ABCDEF'");

  // Test 5: String with all characters the same
  assert(runLengthCompression('BBBB'), 'B4', "Test 5: 'BBBB' should return 'B4'");

  // Test 6: String with alternating characters
  assert(runLengthCompression('ABABAB'), 'ABABAB', "Test 6: 'ABABAB' should return 'ABABAB'");

  // Test 7: String with a mix of single and multiple occurrences
  assert(runLengthCompression('AABCCCDE'), 'A2BC3DE', "Test 7: 'AABCCCDE' should return 'A2BC3DE'");

  // Test 8: Very long string with repeated characters (edge case)
  const longString = 'A'.repeat(1000);
  const expectedLongResult = 'A1000';
  assert(runLengthCompression(longString), expectedLongResult, "Test 8: String of 1000 'A's should return 'A1000'");

  // Test 9: String ending with single repeated character
  assert(runLengthCompression('ABBB'), 'AB3', "Test 9: 'ABBB' should return 'AB3'");

  // Test 10: String starting and ending with different characters
  assert(runLengthCompression('AABBBA'), 'A2B3A', "Test 10: 'AABBBA' should return 'A2B3A'");
}

// Run all tests
runTests();
