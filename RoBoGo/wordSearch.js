<<<<<<< HEAD
/**  Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/
=======
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
>>>>>>> e3b7a3e0fb3f479d4b24cc6fa8bf25e827e5ab26

<<<<<<< HEAD

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {


    for(let i = 0; i < board[0].length; i++) {
        
    }

};


/**
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
 */
=======

    function explore(r,c,p) {
    
    if(p === word.length) return true;
    // check bounds
    const isRowInbound = r >=0 && r < board.length;
    const isColInbound = c >=0 && c < board[0].length;
    
    if(isRowInbound && isColInbound && board[r][c] === word[p])
    {
    
     const temp = board[r][c];
          board[r][c] = '#'; // Mark the cell as visited
    
    const found = explore(r + 1,c, p + 1) ||  explore(r-1,c, p + 1) ||
                  explore(r,c + 1, p + 1) || explore(r,c - 1, p + 1);
    
      board[r][c] = temp; // Restore the original value
    
    return found;
    }
    return false;
    
    }
    
    for(let r = 0; r < board.length; r++) {
        for(let c = 0; c < board[r].length; c++ ) {
    
            if(board[r][c] === word[0] && explore(r,c,0)) {
                return true;
            }
           
        }
    
    }
    
    return false;
    
    
    };


const board =  [["C","A","A"],["A","A","A"],["B","C","D"]];
const word = 'AAB';

// console.log(exist(board, word))

const board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word1 = "ABCB";

console.log(exist(board1, word1))

>>>>>>> e3b7a3e0fb3f479d4b24cc6fa8bf25e827e5ab26