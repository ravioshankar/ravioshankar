/**
 *
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 */




/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const boardSize = board.length;

  const rows = Array.from({ length: 9 }, () => new Set());
  const columns = Array.from({ length: 9 }, () => new Set());
  const subBoxes = Array.from({ length: 9 }, () => new Set());




  for (let r = 0; r < boardSize; r++) {
    for (let c = 0; c < boardSize; c++) {

      const value = board[r][c];
      if (value === '.') {
        continue;
      }

      if(rows[r].has(value)) return false;
      rows[r].add(value);

      if(columns[c].has(value)) return false;
      rows[c].add(value);

      // Check sub-box
      const subBoxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (subBoxes[subBoxIndex].has(value)) return false;
      subBoxes[subBoxIndex].add(value);

    }
  }

  return true;
};











var board1 =
  [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]
// Output: true

var board2 =
  [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]
// Output: false

console.log(isValidSudoku(board1));
console.log(isValidSudoku(board2));

