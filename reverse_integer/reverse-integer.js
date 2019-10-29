'use strict'


// O(n) time | O(1) space
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const INT_MAX = Number.MAX_SAFE_INTEGER
  const INT_MIN = Number.MIN_SAFE_INTEGER
  
  let rev = 0;
  while (x != 0) {
    let pop = x % 10;
    x -= pop
    x /= 10;

    if (rev > INT_MAX / 10 - pop || rev < INT_MIN / 10 - pop) return 0;

    rev = rev * 10 + pop;
  }
  return rev;

};


// TEST
console.log(reverse(55925)) // 52955