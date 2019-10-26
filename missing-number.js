'use strict'

/**
 * takes in an array [0, 1, 2, ..., n] and finds the missing number in the sequence
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  let runningTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    runningTotal = runningTotal + i - nums[i];
  }
  return runningTotal + nums.length;
};

let test = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(test)); // 8
