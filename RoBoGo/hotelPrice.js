/**
 * After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

Example

For

matrix = [[0, 1, 1, 2],
          [0, 5, 0, 0],
          [2, 0, 3, 3]]
the output should be
solution(matrix) = 9
 */

function solution(matrix) {

    let totalPrice = 0;
    function validRoomPrice(r,c,price){

        while(r > 0 ){
            r--;
           if(matrix[r][c] === 0) {
            return 0;
           }
        }

        return price;

    }

    for(let r = 0; r < matrix.length; r++){
        for(let c=0; c < matrix[0].length; c++){
            totalPrice += validRoomPrice(r,c,matrix[r][c])
        }
    }

    return totalPrice;
}

let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
console.log(solution(matrix));


const x = {6:'a', 2: 'b'};

console