/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const nums = new Array(n);
  for (let i = 1; i < n; i++) {
    nums[i] = i;
  }
  let p = 2;
  while (p) {
    let next = p ** 2;
    if (next >= nums.length) {
      break;
    }
    for (let i = next; i < n; i++) {
      if (i === next) {
        nums[i] = 0;
        next = next + p;
      }
    }
    for (let i = p + 1; i < n; i++) {
      if (nums[i] > p) {
        p = nums[i];
        break;
      }
    }
  }
  const count = nums.reduce((count, next) => {
    if (next > 1) {
      return count + 1;
    }
    return count;
  }, 0);
  return count;
};

countPrimes(10);
