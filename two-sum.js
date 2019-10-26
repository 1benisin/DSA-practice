'use strict'

/**
 * returns the indices of the two numbers in the nums array that add up to the target
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let hMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    hMap.set(nums[i], i);
  }

  for (let j = 0; j < nums.length; j++) {
    if(hMap.has(target-nums[j])){
      return [j, hMap.get(target-nums[j])]
    }
  }
};


// TEST
let nums = [2, 7, 11, 15];
let target = 13;
console.log(twoSum(nums, target)); // [ 0, 2 ]