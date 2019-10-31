'use strict'




/**
 * sorts arr1 in the sequence of arr2 and any extra numbers in accending order at the end
 * @param {number[2,3,1,3,2,4,6,7,9,2,19]} arr1
 * @param {number[2,1,4,3,9,6]} arr2
 * @return {number[2,2,2,1,4,3,3,9,6,7,19]}
 */
function relativeSortArray(arr1, arr2) {
  // create hash map of arr2
  const hMap = new Map();
  for (let i = 0; i < arr2.length; i++) {
    hMap.set(arr2[i], i)
  }

  // quicksort recurstively
  quickSort(arr1, 0, arr1.length - 1, hMap)
  return arr1;
};

function quickSort(arr, left, right, hMap) {
  let pivot,
    partitionIndex;


  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right, hMap);

    //sort left and right
    quickSort(arr, left, partitionIndex - 1, hMap);
    quickSort(arr, partitionIndex + 1, right, hMap);
  }
  return arr;
}


function partition(arr, pivot, left, right, hMap) {
  let pivotValue = arr[pivot],
    partitionIndex = left;

  for (let i = left; i < right; i++) {
    let iValue = arr[i];
    // if pivot value is in hMap
    if (hMap.has(pivotValue)) {
      // if i value is in sequence arr
      if (hMap.has(iValue)) {
        if (hMap.get(iValue) < hMap.get(pivotValue)) {
          swap(arr, i, partitionIndex);
          partitionIndex++;
        }
      }

    } else { // if pivot value is not in hMap
      // if i value is in sequence arr
      if (hMap.has(iValue)) {
        swap(arr, i, partitionIndex);
        partitionIndex++;
      } else { // if i value is not in sequence arr
        if (iValue < pivotValue) {
          swap(arr, i, partitionIndex);
          partitionIndex++;
        }
      }
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}


function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}



let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, -5, 19];
let arr2 = [2, 1, 4, 3, 9, 6];
console.log(relativeSortArray(arr1, arr2)); // [2, 2, 2, 1,  4, 3,  3, 9, 6, -5, 7, 19]

