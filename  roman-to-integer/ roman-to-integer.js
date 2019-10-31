'use strict'


// O(n) time | O(1) space
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let resultInt = 0;
  let wasDoubleRoman = false;

  for (let i = 0; i < s.length; i++) {

    if (wasDoubleRoman) {
      wasDoubleRoman = false;
      continue;
    }

    switch (s[i]) {

      case 'I':
        if (s[i + 1] === 'V') {
          wasDoubleRoman = true;
          resultInt += 4;
        }
        else if (s[i + 1] === 'X') {
          wasDoubleRoman = true;
          resultInt += 9;
        }
        else
          resultInt += 1;
        break;

      case 'V':
        resultInt += 5;
        break;

      case 'X':
        if (s[i + 1] === 'L') {
          wasDoubleRoman = true;
          resultInt += 40;
        }
        else if (s[i + 1] === 'C') {
          wasDoubleRoman = true;
          resultInt += 90;
        }
        else
          resultInt += 10;
        break;

      case 'L':
        resultInt += 50;
        break;

      case 'C':
        if (s[i + 1] === 'D') {
          wasDoubleRoman = true;
          resultInt += 400;
        }
        else if (s[i + 1] === 'M') {
          wasDoubleRoman = true;
          resultInt += 900;
        }
        else
          resultInt += 100;
        break;

      case 'D':
        resultInt += 500;
        break;

      case 'M':
        resultInt += 1000;
        break;

      default:
        return 'error';
        break;
    }
  }
  return resultInt;
};

// O(n) time | O(1) space
/**
 * @param {string} s
 * @return {number}
 */
var betterRomanToInt = function(s) {
  let num = 0    
  let sym = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
  
  for(let i = 0;i < s.length; i++){

      
      if(s[i]==="I" && (s[i+1]==="V" || s[i+1]==="X") ){
          num -= sym[`${s[i]}`]
         
          
      }else if(s[i]==="X" && (s[i+1]==="L" || s[i+1]==="C") ){
          num -= sym[`${s[i]}`]
          
      }else if( s[i]==="C" && (s[i+1]==="D" || s[i+1]==="M") ){
          
          num -= sym[`${s[i]}`]
          
      }else{
          num += sym[`${s[i]}`]
          
      }

      
  }
  
  return num 
};


// TESTS
console.log('result', romanToInt("III")) // 3
console.log('result', romanToInt("IV")) // 4
console.log('result', romanToInt("IX")) // 9
console.log('result', romanToInt("LVIII")) // 58
console.log('result', romanToInt("MCMXCIV")) // 1994

console.log('result', betterRomanToInt("III")) // 3
console.log('result', betterRomanToInt("IV")) // 4
console.log('result', betterRomanToInt("IX")) // 9
console.log('result', betterRomanToInt("LVIII")) // 58
console.log('result', betterRomanToInt("MCMXCIV")) // 1994
