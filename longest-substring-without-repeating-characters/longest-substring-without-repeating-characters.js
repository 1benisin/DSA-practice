'use strict'

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let lengthOfLongestSubstring = 0;
  let curLength = 0;
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (set.has(char)) {
      lengthOfLongestSubstring = curLength > lengthOfLongestSubstring ? curLength : lengthOfLongestSubstring;
      set = new Set();
      curLength = 0;
    }
    set.add(char);
    curLength += 1;
  }
  return curLength > lengthOfLongestSubstring ? curLength : lengthOfLongestSubstring;
};


console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("2"));
// console.log(lengthOfLongestSubstring(""));