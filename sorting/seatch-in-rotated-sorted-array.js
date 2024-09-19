const binarySearch = (target, nums, left, right) => {
  const mid = left + Math.floor((right - left) / 2);

  if (target === nums[mid]) {
    return mid;
  }
  if (right <= left) {
    return -1;
  }
  if (target < nums[mid]) {
    return binarySearch(target, nums, left, mid - 1);
  }
  if (target > nums[mid]) {
    return binarySearch(target, nums, mid + 1, right);
  }
  return -1;
}

const findRotationIndex = (nums, left, right) => {
  const mid = left + Math.floor((right - left) / 2);

  if (nums[mid - 1] > nums[mid]) {
    return mid;
  }
  if (nums[mid] > nums[right]) {
    return findRotationIndex(nums, mid + 1, right);
  }
  if (nums[mid] < nums[right]) {
    return findRotationIndex(nums, left, mid - 1);
  }
  return 0;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const rotIndex = findRotationIndex(nums, 0, nums.length - 1);
  if (target >= nums[rotIndex] && target <= nums[nums.length - 1]) {
    return binarySearch(target, nums, rotIndex, nums.length - 1);
  } else {
    return binarySearch(target, nums, 0, rotIndex - 1);
  }
};

// const res = search([4, 5, 6, 7, 0, 1, 2], 1);
// const res = search([1], 0);
const res = search([1,3], 2);
// const res = search([9,0,2,7,8], 3);

console.log(res);

