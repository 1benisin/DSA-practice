'use strict'

// O(n)+n time | O(1) space
function riverSizes(matrix) {
  let rivers = [];
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      console.log(matrix[y][x]);
      if (matrix[y][x] === 1)
        rivers.push(sumSurrounding([x,y],matrix));
    }
  }
  return rivers;
}

function sumSurrounding(position, matrix) {
  let x = position[0];
  let y = position[1];
  // return 0 if position falls outside the matrix or position value is not 1
  if (x < 0 || y < 0 || y > matrix.length-1 || x > matrix[y].length-1 || matrix[y][x] === 0) return 0;

  let sum = 1;
  matrix[y][x] = 0;

  sum = sum + sumSurrounding([x-1, y], matrix);
  sum = sum + sumSurrounding([x+1, y], matrix);
  sum = sum + sumSurrounding([x, y-1], matrix);
  sum = sum + sumSurrounding([x, y+1], matrix);
 
  return sum;
}

// TEST
const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
]
// console.log(sumSurrounding([0,0], matrix)) // 5
console.log(riverSizes(matrix)) // 5