/**
 * You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
solution(inputArray) = 3.
 */

function solution(inputArray){

    let tickCount = 0;
    
    for(let i = 1; i < inputArray.length ; i++){
    
        if(inputArray[i] <= inputArray[i-1]){
            let diff = (inputArray[i-1] - inputArray[i]) + 1;
            inputArray[i] +=diff;
            tickCount +=diff;
        }
    }
    return tickCount;
}

console.log(solution([1,1,1]))