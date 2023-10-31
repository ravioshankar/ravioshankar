
/**
 * Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
solution(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

    2 + 3 = 5;
    3 + 5 = 8;
    5 + 1 = 6;
    1 + 6 = 7.
    Thus, the answer is 8.

 * @param {*} inputArray 
 * @param {*} k 
 * @returns 
 */


function solution(inputArray, k) {
let maxSum = -Infinity;
for(let x = k-1; x <= inputArray.length; x++){
    let count = k;
    let sum =0 ;
    while(count > 0){
        sum+=inputArray[x-count];
        count--;
    }
    maxSum = maxSum > sum ? maxSum : sum;
}

return maxSum;
}

console.log(solution([1, 3, 2, 4], 3));