/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = '_';
    }
  }
  nums.sort((a, b) => {
    if (a === '_' && b !== '_') {
      return 1
    }
    if (a !== '_' && b !== '_') {
      return -1
    }
    if (a === '_' && b === '_') {
      return 0
    }
    return a - b;
  })

};

removeElement([3,2,2,3], 3)
