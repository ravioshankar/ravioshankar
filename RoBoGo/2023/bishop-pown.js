/**
 * Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

Example

    For bishop = "a1" and pawn = "c3", the output should be
    solution(bishop, pawn) = true.

    For bishop = "h1" and pawn = "h3", the output should be
solution(bishop, pawn) = false.
 */

function solution(bishop, pawn) {
  let positions = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
  };
  if (bishop[0] === pawn[0] || bishop[1] === pawn[1]) {
    return false;
  }
  let rows = Object.keys(positions);
  let cols = Object.values(positions);

    function findCapture(r, c, m = 1) {
    // check rows /cols inbounds
    let rowsInBound = r > 0 && r <= 8;
      let colsInBound = c > 0 && c <= 8;
      let maxMove = 8;
    if (!rowsInBound || !colsInBound || m > maxMove) {
      return false;
    }
    let currentPosition = `${positions[r]}${c}`;
    if (currentPosition === pawn) {
      return true;
    }
    if (!rowsInBound || !colsInBound && currentPosition !== pawn) {
      return false;
    }

    return findCapture(Number(r) + 1, Number(c) + 1, m+1) ||
      findCapture(Number(r) + 1, Number(c) - 1, m+1) ||
      findCapture(Number(r) - 1, Number(c) - 1, m+1) ||
      findCapture(Number(r) - 1, Number(c) + 1, m+1);
  }

  let idx = cols.indexOf(bishop[0]) + 1;

  return findCapture(idx, bishop[1]);
}

let bishop = "a5", pawn = "c3";

console.log(solution(bishop, pawn));

bishop = "h1";
pawn = "h3";

console.log(solution(bishop, pawn));
