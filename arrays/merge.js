/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p2 = n - 1;
  let p1 = m - 1;
  let pres = nums1.length - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[pres] = nums1[p1];
      p1--;
      pres--;
      continue;
    }
    if (nums1[p1] < nums2[p2]) {
      nums1[pres] = nums2[p2];
      p2--;
      pres--;
    }
  }

  while (p1 >= 0) {
    nums1[pres] = nums1[p1];
    p1--;
    pres--;
  }

  while (p2 >= 0) {
    nums1[pres] = nums2[p2];
    p2--;
    pres--;
  }

  return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
