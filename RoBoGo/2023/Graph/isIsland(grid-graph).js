/**
 * island count
Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

test_00:
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid); // -> 3
test_01:
const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

islandCount(grid); // -> 4
test_02:
const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

islandCount(grid); // -> 1
test_03:
 const grid = [
  ['W', 'W'],
  ['W', 'W'],
  ['W', 'W'],
];

islandCount(grid); // -> 0
 */


function isIandCount(grid) {

    const rowLength = grid.length;
    const colLength = grid[0].length;
    const visited = new Set();
    let count = 0;
    for(let r = 0; r < rowLength; r++){
        for(let c = 0; c < colLength; c++){
                if(countIsLand(grid, r, c, visited)){
                    count = count+1;
                }
        }
    }

    return count;
}

function countIsLand(grid, r,c, visited) {

   const rowBounds = 0 <= r && r < grid.length;
   const colBounds = 0 <= c && c < grid.length;
   if(!rowBounds || !colBounds) return false;

    if(grid[r][c] === 'W') return false;
    const source = `${r},${c}`;
    if(visited.has(source)) return false;

    visited.add(source);

    countIsLand(grid,r - 1,c,visited);
    countIsLand(grid,r + 1,c,visited);
    countIsLand(grid,r, c - 1,visited);
    countIsLand(grid,r, c + 1,visited);

    return true;

}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];

console.log(isIandCount(grid))