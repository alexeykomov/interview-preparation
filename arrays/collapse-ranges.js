/**
 * **Problem Description:**
 *
 * You are given a list of integers, where there are no repeated elements. Your task is to convert this list into a string by collapsing consecutive numbers into ranges.
 *
 * - A range is defined as a sequence of consecutive numbers.
 * - If two or more consecutive numbers exist, they should be represented in the form "start-end" (inclusive).
 * - Non-consecutive numbers should be represented as individual numbers.
 * - The numbers in the output string should be sorted in ascending order.
 *
 * Write a function that converts the input list into a formatted string, following the above rules.
 *
 * **Example:**
 *
 * ```python
 * def collapse_ranges(numbers: List[int]) -> str:
 *     # Your implementation here
 * ```
 *
 * ### Example 1:
 * ```python
 * Input: [1, 4, 5, 2, 3, 9, 8, 11, 0]
 * Output: "0-5,8-9,11"
 * ```
 *
 * ### Example 2:
 * ```python
 * Input: [1, 4, 3, 2]
 * Output: "1-4"
 * ```
 *
 * ### Example 3:
 * ```python
 * Input: [1, 4]
 * Output: "1,4"
 * ```
 *
 * ### Constraints:
 * - The input list will not contain any duplicate numbers.
 * - The input list can be in any order and may contain positive or negative integers.
 * - The input list will have at least one integer.
 *
 * ### Notes:
 * - Your function should handle both small and large lists efficiently.
 */
const collapseRanges = (input) => {
  input.sort((a, b) => a - b);
  if (input.length < 2) {
    return input.join();
  }

  const res = [[]];
  let lastRange = res[0];
  for (let i = 0; i < input.length; i++) {
    if (!Number.isFinite(lastRange[0])) {
      lastRange[0] = input[i];
      continue;
    }
    if (!Number.isFinite(lastRange[1]) && input[i] - lastRange[0] === 1) {
      lastRange[1] = input[i];
      continue;
    }
    if (!Number.isFinite(lastRange[1]) && input[i] - lastRange[0] > 1) {
      lastRange[1] = lastRange[0];
      res.push([input[i]]);
      lastRange = res[res.length - 1];
      continue;
    }
    if (input[i] === lastRange[1]) {
      continue;
    }
    if (input[i] - lastRange[1] === 1) {
      lastRange[1] = input[i];
      continue;
    }
    if (input[i] > lastRange[1]) {
      res.push([input[i]]);
      lastRange = res[res.length - 1];
    }
  }
  lastRange = res[res.length - 1];
  if (!Number.isFinite(lastRange[1])) {
    lastRange[1] = lastRange[0];
  }
  return res
    .map((range) => {
      if (range[0] === range[1]) {
        return String(range[0]);
      }
      return `${range[0]}-${range[1]}`;
    })
    .join();
};

module.exports = {
  collapseRanges,
};
