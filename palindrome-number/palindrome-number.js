'use strict'


// O(n) time | O(n) space
/**
 * changes number into string and compares digits
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let numString = x.toString();
  for (let i = 0; i < numString.length / 2; i++) {
    if ( numString[i] !== numString[numString.length-i-1])
    return false;
  }
  return true;
};

// O(n) time | O(n) space
/**
 * reverses half the number and compares them
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeBetter = function (x) {
  //special cases. less than zero or ends with 
  if(x < 0 || (x % 10 === 0 && x != 0)) return false;
  if(x === 0) return true;

  let rev = 0;
  // reverse
  while (rev < x) {
    const digit = x % 10;
    rev *= 10;
    rev += digit;
    // compare for odd number of digits
    if (rev === x) return true;
    x -= digit;
    x /= 10;
    // compare for even number of digits
    if (rev === x) return true;
  }
  return false 
};


// TESTS
console.log('result', isPalindrome(56965)) // true
console.log('result', isPalindrome(30925)) // false

console.log('result', isPalindromeBetter(56965)) // true
console.log('result', isPalindromeBetter(569965)) // true
console.log('result', isPalindromeBetter(110)) // false