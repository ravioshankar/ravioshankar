/**
 *
 * Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

Example

    For cell = "a1", the output should be
    solution(cell) = 2.

    For cell = "c2", the output should be
    solution(cell) = 6.


 *
 */

function solution(cell) {
  let positions = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
  };

  function findKnightMoves(col, row, move = 0) {
    // check inound
    let rowsInBound = row > 0 && row <= 8;
    let colsInBound = col > 0 && col <= 8;

    if ((!rowsInBound || !colsInBound)) {
      return 0;
    }
    if (rowsInBound && colsInBound && move !== 0) {
      return 1;
    }

    // result = findKnightMoves(row + 2, col + 1, move + 1) +
    //   findKnightMoves(row + 2, col - 2, move + 1) +
    //   findKnightMoves(row + 1, col - 2, move + 1) +
    //   findKnightMoves(row - 1, col - 2, move + 1) +
    //   findKnightMoves(row + 1, col + 2, move + 1) +
    //   findKnightMoves(row - 1, col + 2, move + 1) +
    //   findKnightMoves(row - 2, col + 1, move + 1) +
    //   findKnightMoves(row - 2, col - 2, move + 1);
    return findKnightMoves(row + 2, col + 1, move + 1) +
      findKnightMoves(row + 2, col - 2, move + 1) +
      findKnightMoves(row + 1, col - 2, move + 1) +
      findKnightMoves(row - 1, col - 2, move + 1) +
      findKnightMoves(row + 1, col + 2, move + 1) +
      findKnightMoves(row - 1, col + 2, move + 1) +
      findKnightMoves(row - 2, col + 1, move + 1) +
      findKnightMoves(row - 2, col - 1, move + 1);
  }

  return findKnightMoves(positions[cell[0]], Number(cell[1]), 0);
}

console.log(solution("c2")); // "c2", "b7"
