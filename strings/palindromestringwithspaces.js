/**
 * Написать функцию, которая определяет, является ли переданная строка палиндромом
 * (читается слева-направо и справа-налево одинаково).
 *
 * Примеры палиндромов:
 * - Казак
 * - А роза упала на лапу Азора
 * - Madam, I'm Adam
 *
 * Ограничение по памяти 0(1).
 */
function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;
  while (l <= r) {
    if (str[l] === ' ') {
      l++;
      continue;
    }
    if (str[r] === ' ') {
      r--;
      continue;
    }
    if (str[l].toLowerCase() !== str[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

console.log(isPalindrome('Казак'))
console.log(isPalindrome('А роза упала на лапу Азора'))
console.log(isPalindrome('Madam, I\'m Adam'))

