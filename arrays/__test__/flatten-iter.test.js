const { flattenIter } = require('../flatten-iter'); // Assuming you implement flattenIter in this file

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

  // Test 1: Basic single-level array (no nesting)
  const input1 = [1, 2, 3, 4];
  const expected1 = [1, 2, 3, 4];
  const result1 = flattenIter(input1);
  assert(
      JSON.stringify(result1) === JSON.stringify(expected1),
      "Flattening [1, 2, 3, 4] should return [1, 2, 3, 4].",
      result1,
      expected1
  );

  // Test 2: Two-level nested array
  const input2 = [1, [2, 3], 4];
  const expected2 = [1, 2, 3, 4];
  const result2 = flattenIter(input2);
  assert(
      JSON.stringify(result2) === JSON.stringify(expected2),
      "Flattening [1, [2, 3], 4] should return [1, 2, 3, 4].",
      result2,
      expected2
  );

  // Test 3: Multiple nested arrays
  const input3 = [[1, 2], [3, 4], [5, [6, 7]]];
  const expected3 = [1, 2, 3, 4, 5, 6, 7];
  const result3 = flattenIter(input3);
  assert(
      JSON.stringify(result3) === JSON.stringify(expected3),
      "Flattening [[1, 2], [3, 4], [5, [6, 7]]] should return [1, 2, 3, 4, 5, 6, 7].",
      result3,
      expected3
  );

  // Test 4: Deeply nested array
  const input4 = [1, [2, [3, [4, [5]]]]];
  const expected4 = [1, 2, 3, 4, 5];
  const result4 = flattenIter(input4);
  assert(
      JSON.stringify(result4) === JSON.stringify(expected4),
      "Flattening [1, [2, [3, [4, [5]]]]] should return [1, 2, 3, 4, 5].",
      result4,
      expected4
  );

  // Test 5: Array with different data types
  const input5 = [1, 'a', [true, [null, [undefined]], 2], 3];
  const expected5 = [1, 'a', true, null, undefined, 2, 3];
  const result5 = flattenIter(input5);
  assert(
      JSON.stringify(result5) === JSON.stringify(expected5),
      "Flattening [1, 'a', [true, [null, [undefined]], 2], 3] should return [1, 'a', true, null, undefined, 2, 3].",
      result5,
      expected5
  );

  // Test 6: Empty array
  const input6 = [];
  const expected6 = [];
  const result6 = flattenIter(input6);
  assert(
      JSON.stringify(result6) === JSON.stringify(expected6),
      "Flattening an empty array should return an empty array.",
      result6,
      expected6
  );

  // Test 7: Array with empty sub-arrays
  const input7 = [1, [], [2, []], [3, [4, []]]];
  const expected7 = [1, 2, 3, 4];
  const result7 = flattenIter(input7);
  assert(
      JSON.stringify(result7) === JSON.stringify(expected7),
      "Flattening [1, [], [2, []], [3, [4, []]]] should return [1, 2, 3, 4].",
      result7,
      expected7
  );

  // Test 8: Deeply nested empty arrays
  const input8 = [1, [2, [[], [3, []], 4], 5], []];
  const expected8 = [1, 2, 3, 4, 5];
  const result8 = flattenIter(input8);
  assert(
      JSON.stringify(result8) === JSON.stringify(expected8),
      "Flattening [1, [2, [[], [3, []], 4], 5], []] should return [1, 2, 3, 4, 5].",
      result8,
      expected8
  );

  // Test 9: Array with only nested arrays
  const input9 = [[[[1]]], [[2]], [3]];
  const expected9 = [1, 2, 3];
  const result9 = flattenIter(input9);
  assert(
      JSON.stringify(result9) === JSON.stringify(expected9),
      "Flattening [[[[1]]], [[2]], [3]] should return [1, 2, 3].",
      result9,
      expected9
  );

  // Test 10: Array with null, undefined, and empty strings
  const input10 = [null, undefined, '', [null, undefined, ['']]];
  const expected10 = [null, undefined, '', null, undefined, ''];
  const result10 = flattenIter(input10);
  assert(
      JSON.stringify(result10) === JSON.stringify(expected10),
      "Flattening [null, undefined, '', [null, undefined, ['']]] should return [null, undefined, '', null, undefined, ''].",
      result10,
      expected10
  );
}

// Run all tests
runTests();
