/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {


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
