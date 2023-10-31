/**
 * In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]

the output should be

solution(matrix) = [[1, 2, 1],
                    [2, 1, 1],
                    [1, 1, 1]]

Check out the image below for better understanding:


 */

// function solution(matrix) {
//   let adjacents = ([i, j]) => [
//     [i - 1, j - 1],
//     [i - 1, j],
//     [i - 1, j + 1],
//     [i, j - 1],
//     [i, j + 1],
//     [i + 1, j - 1],
//     [i + 1, j],
//     [i + 1, j + 1],
//   ];
//   let hintsMatrix = matrix.map((r) => r.map((_) => 0));

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j]) {
//         let myAd = adjacents([i, j]);
//         for (var k = 0; k < 8; k++) {
//           if (
//             myAd[k][0] >= 0 &&
//             myAd[k][1] >= 0 &&
//             myAd[k][0] < matrix.length &&
//             myAd[k][1] < matrix[i].length
//           ) {
//             hintsMatrix[myAd[k][0]][myAd[k][1]]++;
//           }
//         }
//       }
//     }
//   }

//   return hintsMatrix;
// }


const directions = [
    [ 1,-1], [ 1, 0], [ 1, 1],
    [ 0,-1],          [ 0, 1],
    [-1,-1], [-1, 0], [-1, 1]
];

solution = (matrix) => matrix.map((row, y) => row.map((col, x) => directions.reduce((count, i) => count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]]), 0)));

// ---- SOLUTION -------

let matrix = [[true, false, false], [false, true, false], [
  false,
  false,
  false,
]];

console.log(solution(matrix));

matrix = [[false, false, false], [false, false, false]];

console.log(solution(matrix));
matrix = [[true, false], [true, false], [false, true], [false, false], [
  false,
  false,
]];

console.log(solution(matrix));
