/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (right === 0 || nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  return left;
};

removeDuplicates([1,1,2]);
