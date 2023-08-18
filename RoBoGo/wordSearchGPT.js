/**  Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
    function backtrack(i, j, k) {
      if (k === word.length) {
        return true;
      }
  
      if (
        i < 0 ||
        i >= board.length ||
        j < 0 ||
        j >= board[0].length ||
        board[i][j] !== word[k]
        
      ) {
        return false;
      }
  
      const temp = board[i][j];
      board[i][j] = '#'; // Mark the cell as visited
  
      const found =
        backtrack(i + 1, j, k + 1) ||
        backtrack(i - 1, j, k + 1) ||
        backtrack(i, j + 1, k + 1) ||
        backtrack(i, j - 1, k + 1);
  
      board[i][j] = temp; // Restore the original value
  
      return found;
    }
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === word[0] && backtrack(i, j, 0)) {
          return true;
        }
      }
    }
  
    return false;
  }

  



/**
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
 */

const board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ];
  const word = "ABCCED";
  console.log(exist(board, word));

 const board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word1 = "ABCB";

 console.log(exist(board1, word1));
