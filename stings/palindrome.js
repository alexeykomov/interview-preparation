/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (Math.sign(x) < 0) {
    return false;
  }
  let length = 0;
  let divisor = 1;
  while (Math.trunc(x / divisor) !== 0) {
    length++;
    divisor *= 10;
  }

  const divisorBase = 10;
  for (let i = 0; i < length; i++) {
    let left = Math.trunc(x / (divisorBase ** (length - 1 - i)));
    left = i === 0 ? left : left % 10;

    let right = x % (divisorBase ** (i + 1));
    right = i === 0 ? right : Math.trunc(right / (divisorBase ** i));

    if (left !== right) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(-121));
