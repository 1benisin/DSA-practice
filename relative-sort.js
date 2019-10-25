'use strict'


/**
 * @param {number[2,3,1,3,2,4,6,7,9,2,19]} arr1
 * @param {number[2,1,4,3,9,6]} arr2
 * @return {number[2,2,2,1,4,3,3,9,6,7,19]}
 */
var relativeSortArray = (arr1, arr2) => {
  // create hash map of arr2
  const hMap = Map();
  for (let i = 0; i < arr2.length; i++) {
    hMap.set(arr2[i], i)
  }

  // quicksort recurstively
};

var relativeQuickSort = (frontIndex, backIndex, arr) => {
  const pivot = arr[backIndex];
  let J
  for (let i = 0; i < arr.length; i++) {
    if (i)
  }

}

relativeQuickSort(0, 4, [4, 6, 8, 2, 0])