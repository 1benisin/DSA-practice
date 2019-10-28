'use strict'

// O(n) time | O(1) space
function getNthFib(n) {
  let current = 0,
    last = 1;
  for (let i = 1; i < n; i++) {
    let nextFib = current;
    current = current+last;
    last = nextFib;
  }
  return current;
}

// TEST
console.log(getNthFib(6)) // 5