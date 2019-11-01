'use strict'

// O(n) time | O(1) space
/**
 * recursively loop through all strings checking next letter until letter doesn't match
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs, prefix = '') {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];

  const l = prefix.length;
  let letter;
  for (let w = 0; w < strs.length; w++) {
    if (!strs[w].length) return "";
    if (w === 0) {
      letter = strs[w][l];
    } else {
      if (!letter || letter !== strs[w][l]) {
        return prefix;
      }
    }
  }

  const newPrefix = prefix.concat(letter);
  return longestCommonPrefix(strs, newPrefix);
};

/**
 * O(n)time - number of strings * common prefix  | O(N) space
 * loop through recursively and find longestCommonPrefix of just 2 strings at a time
* @param {string[]} strs
* @return {string}
*/
const betterLCP = function (strs) {
  if (!strs.length) return '';
  if (strs.length === 1)
    return strs[0]
  else {
    let prefix = '';
    const stringA = strs.pop();
    const stringB = strs.pop();

    for (let i = 0; i < stringA.length; i++) { // O(longest string)
      if (stringA[i] === stringB[i]) {
        prefix += stringA[i];
      } else {
        break;
      }
    }
    strs.push(prefix);
    return betterLCP(strs); // O(N) uses call stack
  }
};

/**
 * O(n)time - number of strings * common prefix  | O(N) space
 * loop through recursively and find longestCommonPrefix of just 2 strings at a time
* @param {string[]} strs
* @return {string}
*/
const betterBetterLCP = function (strs) {
     //Error handling - handle empty arrays 
     if(strs.length === 0) return "";
 
     const sortedStrs = strs.concat().sort();        //copy strs to a new array (concat) then sort it (sort)
     const ray1 = sortedStrs[0];                      //first subarray index starts at sortedStrs's start (its first string)
     const ray2 = sortedStrs[sortedStrs.length-1];   //second subarray index starts at sortedstrs's second element (its second string)
     let a = 0;                                      //loop counter
 
     //LOOP: while the loop counter is less than ray1's legnth and the character at position a is the same for ray1 and ray2
     while(a < ray1.length && ray1.charAt(a) === ray2.charAt(a))
     {
         a++;
     }
     return ray1.substring(0, a); //return
};




// TESTS
console.log('result fl = ', longestCommonPrefix(["flower", "flow", "flight"])) // "fl"
console.log('result  = ', longestCommonPrefix(["dog", "racecar", "car"])) // ""
console.log('result  = ', longestCommonPrefix([])) // ""
console.log('result  = ', longestCommonPrefix([""])) // ""
console.log('result a = ', longestCommonPrefix(["a"])) // ""
console.log('result  = ', longestCommonPrefix(["", ""])) // ""
console.log('result c = ', longestCommonPrefix(["c", "c"])) // ""

console.log('result fl = ', betterLCP(["flower", "flow", "flight"])) // "fl"
console.log('result  = ', betterLCP(["dog", "racecar", "car"])) // ""
console.log('result  = ', betterLCP([])) // ""
console.log('result  = ', betterLCP([""])) // ""
console.log('result a = ', betterLCP(["a"])) // ""
console.log('result  = ', betterLCP(["", ""])) // ""
console.log('result c = ', betterLCP(["c", "c"])) // ""

console.log('result fl = ', betterBetterLCP(["flower", "flow", "flight"])) // "fl"
console.log('result  = ', betterBetterLCP(["dog", "racecar", "car"])) // ""
console.log('result  = ', betterBetterLCP([])) // ""
console.log('result  = ', betterBetterLCP([""])) // ""
console.log('result a = ', betterBetterLCP(["a"])) // ""
console.log('result  = ', betterBetterLCP(["", ""])) // ""
console.log('result c = ', betterBetterLCP(["c", "c"])) // ""


