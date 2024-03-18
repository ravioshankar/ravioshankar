/**
 * Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]

the output should be
solution(matrix) = 6.

Here are all 6 different 2 × 2 squares:

    1 2
    2 2
    2 1
    2 2
    2 2
    2 2
    2 2
    1 2
    2 2
    2 3
    2 3
    2 1

 */

function solution(matrix) {
  let set = new Set();
  if (matrix.length < 2 || matrix[0].length < 2) {
    return 0;
  } else {
    let mat = "";

    for (let i = 0; i < matrix.length - 1; i++) {
      for (let j = 0; j < matrix[0].length - 1; j++) {
        const hash = matrix[i][j] + 10 * matrix[i][j + 1] +
          100 * matrix[i + 1][j] + 1000 * matrix[i + 1][j + 1];
        set.add(hash);
      }
    }

    console.log("Set", set);
    return set.size;
  }
}

let matrix = [[1, 2, 1], [2, 2, 2], [2, 2, 2], [1, 2, 3], [2, 2, 1]];
console.log(solution(matrix));
matrix = [[9, 9, 9, 9, 9], [9, 9, 9, 9, 9], [9, 9, 9, 9, 9], [9, 9, 9, 9, 9], [
  9,
  9,
  9,
  9,
  9,
], [9, 9, 9, 9, 9]];
console.log(solution(matrix));
matrix = [
  [2, 5, 3, 4, 3, 1, 3, 2],
  [4, 5, 4, 1, 2, 4, 1, 3],
  [1, 1, 2, 1, 4, 1, 1, 5],
  [1, 3, 4, 2, 3, 4, 2, 4],
  [1, 5, 5, 2, 1, 3, 1, 1],
  [1, 2, 3, 3, 5, 1, 2, 4],
  [3, 1, 4, 4, 4, 1, 5, 5],
  [5, 1, 3, 3, 1, 5, 3, 5],
  [5, 4, 4, 3, 5, 4, 4, 4],
];
console.log(solution(matrix));
