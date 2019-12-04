'use strict'

// O(n) time | O(n) space
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const reverseBracket = {
    ")": "(",
    "]": "[",
    "}": "{",
  }

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    }
    if (c === ')' || c === ']' || c === '}') {
      if (stack.pop() !== reverseBracket[c]) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  } else {
    return true;
  }

};




// TESTS
console.log('result true = ', isValid("()"));
console.log('result true = ', isValid("()[]{}"));
console.log('result false = ', isValid("(]"));
console.log('result false = ', isValid("([)]"));
console.log('result true = ', isValid("{[]}"));


