const { collapseRanges } = require('../collapse-ranges'); // Assuming you implement collapseRanges in this file

function runTests() {
  // Helper function to log test results
  function assert(condition, message, actual, expected) {
    if (!condition) {
      console.error(`Test failed: ${message}`);
      console.error(`Expected: ${JSON.stringify(expected)}, but got: ${JSON.stringify(actual)}`);
    } else {
      console.log(`Test passed: ${message}`);
    }
  }

  // Test 1: Mixed input with consecutive and non-consecutive numbers
  const input1 = [1, 4, 5, 2, 3, 9, 8, 11, 0];
  const expected1 = "0-5,8-9,11";
  const result1 = collapseRanges(input1);
  assert(
      result1 === expected1,
      "collapseRanges([1, 4, 5, 2, 3, 9, 8, 11, 0]) should return '0-5,8-9,11'.",
      result1,
      expected1
  );

  // Test 2: All consecutive numbers
  const input2 = [1, 2, 3, 4];
  const expected2 = "1-4";
  const result2 = collapseRanges(input2);
  assert(
      result2 === expected2,
      "collapseRanges([1, 2, 3, 4]) should return '1-4'.",
      result2,
      expected2
  );

  // Test 3: Non-consecutive numbers
  const input3 = [1, 4];
  const expected3 = "1,4";
  const result3 = collapseRanges(input3);
  assert(
      result3 === expected3,
      "collapseRanges([1, 4]) should return '1,4'.",
      result3,
      expected3
  );

  // Test 4: Reverse order with consecutive numbers
  const input4 = [3, 2, 1];
  const expected4 = "1-3";
  const result4 = collapseRanges(input4);
  assert(
      result4 === expected4,
      "collapseRanges([3, 2, 1]) should return '1-3'.",
      result4,
      expected4
  );

  // Test 5: Single element in the list
  const input5 = [7];
  const expected5 = "7";
  const result5 = collapseRanges(input5);
  assert(
      result5 === expected5,
      "collapseRanges([7]) should return '7'.",
      result5,
      expected5
  );

  // Test 6: List with negative numbers
  const input6 = [-3, -2, -1, 0, 1, 3];
  const expected6 = "-3-1,3";
  const result6 = collapseRanges(input6);
  assert(
      result6 === expected6,
      "collapseRanges([-3, -2, -1, 0, 1, 3]) should return '-3-1,3'.",
      result6,
      expected6
  );

  // Test 7: Empty list
  const input7 = [];
  const expected7 = "";
  const result7 = collapseRanges(input7);
  assert(
      result7 === expected7,
      "collapseRanges([]) should return an empty string.",
      result7,
      expected7
  );

  // Test 8: List with non-consecutive numbers
  const input8 = [10, 20, 30];
  const expected8 = "10,20,30";
  const result8 = collapseRanges(input8);
  assert(
      result8 === expected8,
      "collapseRanges([10, 20, 30]) should return '10,20,30'.",
      result8,
      expected8
  );

  // Test 9: Long range of consecutive numbers
  const input9 = [5, 6, 7, 8, 9, 10, 11, 12];
  const expected9 = "5-12";
  const result9 = collapseRanges(input9);
  assert(
      result9 === expected9,
      "collapseRanges([5, 6, 7, 8, 9, 10, 11, 12]) should return '5-12'.",
      result9,
      expected9
  );

  // Test 10: Single non-consecutive number in a long list
  const input10 = [1, 2, 3, 4, 10];
  const expected10 = "1-4,10";
  const result10 = collapseRanges(input10);
  assert(
      result10 === expected10,
      "collapseRanges([1, 2, 3, 4, 10]) should return '1-4,10'.",
      result10,
      expected10
  );
}

// Run all tests
runTests();
