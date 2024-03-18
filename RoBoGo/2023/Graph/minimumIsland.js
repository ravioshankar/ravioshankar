/**
 * minimum island
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.

test_00:
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

minimumIsland(grid); // -> 2
test_01:
const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

minimumIsland(grid); // -> 1
test_02:
const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

minimumIsland(grid); // -> 9
test_03:
const grid = [
  ['W', 'W'],
  ['L', 'L'],
  ['W', 'W'],
  ['W', 'L']
];

minimumIsland(grid); // -> 1
 */


function minimumIsland(grid) {

    let rowLen = grid.length;
    let colLen = grid[0].length;
    let visited = new Set();
    let minsize = Infinity;
    for(let r = 0; r < rowLen; r += 1 ){
        for(let c = 0; c < colLen; c += 1){
            let result =  exploreSize(grid,r,c, visited);
           if(minsize > result && result > 0) {
            minsize = result;
           }
        }
    }

    return minsize;
}


function exploreSize(grid, r, c, visited) {

    let rowLen = grid.length;
    let colLen = grid[0].length;
    // base conditions 

    const rowInBounds =  0 <= r && r < rowLen;

    const colInBounds =  0 <= c && c < colLen;

    if(!rowInBounds || !colInBounds) return 0;

    if(grid[r][c] == 'W') return 0;

    const current = `${r}-${c}`;

    if(visited.has(current)) return 0;

    visited.add(current);

    let size = 1;
    // move in the grid

    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r, c + 1, visited);
    size += exploreSize(grid, r, c - 1, visited);

    console.log("size ", size);
    return size;
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
  
  console.log(minimumIsland(grid));