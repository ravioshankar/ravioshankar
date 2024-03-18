/**
 * 79. Word Search
Medium

8656

328

Add to List

Share
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.



Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false


Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.


Follow up: Could you use search pruning to make your solution faster with a larger board?
 */


// function exist(board: string[][], targetWord: string): string[][] {

//     if(targetWord === '' ) return [[]];

//     let result = []
//     for( let row = 0 ; row < board.length; row++){

//         for(let col = 0 ; col< board[row].length; col++) {
//             if(targetWord.charAt(0) == board[row][col]){
//             const suffix = targetWord.slice(1);
//             const suffixWays = exist(board, suffix);
//             // console.log(suffixWays)
//                 const txt = `${row}, ${col}`
//             const targetWays: string[][]|undefined = suffixWays?.map( way => [txt, ...way]);
//             if(targetWays) result.push(...targetWays)
//             }
//         }

//     }

//     return result;
// }


function exist(board, targetWord,  row, col, memo={}){

    const key = `${row}-${col}`;
    if(key in memo) return memo[key];
    if(row==1 && col==1) return board[row][col];
    if(row==0 || col==0) return '';

    memo[key] = exist(board, row-1,col, memo) + exist(board, row, col-1, memo);
    return memo[key];
}








// Input: board =       [["A","B","C","E"],
                    //   ["S","F","C","S"],
                    //   ["A","D","E","E"]], word = "ABCCED"
// Output: true

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "BAD"))

console.log(exist([["A"]], "A"));
