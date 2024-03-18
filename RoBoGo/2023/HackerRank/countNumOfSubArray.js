/**
 * Given an array of _n _integers, and a required sum _k, _find the number of subarrays whose sum is equal to the required sum. A subarray is a contiguous segment of an array.

Example

arr = [1, 2, 3, 0]

k = 3

There are 3 subarrays whose sum is equal to 3. These are: [1, 2], [3], [3, 0]. Thus, the answer is 3.

Function Description

Complete the function countNumberOfSubarrays in the editor below.

countNumberOfSubarrays has the following parameters:

    int arr[n]: the given array of integers

    _int k: _the required sum

Returns

**    **_long_int: _the number of subarrays with sum equal to k.

Constraints

1 ≤ _n _≤ 105
-109 ≤ _arr[i] _≤ 109
_-_109 ≤ k ≤ 109

Input Format For Custom Testing

The first line contains an integer, n, denoting the number of elements in arr.
Each line i of the n subsequent lines (where 0 ≤ i < n) contains an integer describing arri.

The last line contains an integer, _k, _denoting the required subarray sum.

Sample Case 0

Sample Input For Custom Testing

STDIN         FUNCTION -----         -------- 5        →    arr[] size n = 5 10       →    arr = [10, 2, -2, -20, 10] 2 -2 -20 10 -10      →    required sum k = -10

Sample Output

3

Explanation

Three subarrays [10, 2, -2, -20], [2, -2, -20, 10] and [-20, 10] have a sum of _k = -10. _

Sample Case 1

Sample Input For Custom Testing

STDIN         FUNCTION -----         -------- 4        →    arr[] size n = 4         1        →    arr = [1, 1, 1, 1] 1 1 1     2        →    required sum k = 2

Sample Output

3

Explanation

Since all the integer values are 1, taking any two consecutive elements will result in a sum of 2. There are 3 such subarrays.
 */


/*
 * Complete the 'countNumberOfSubarrays' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER k
 */

function countNumberOfSubarrays(arr, k) {
    // Write your code here
let arrySum = 0;
let count=0;



for(let i =0; i < arr.length; i++){
    arrySum = 0;
    for(let j= i; j < arr.length; j++) {
        if((arrySum += arr[j]) == k){
            count++;
        }
    }
}
return count;
}

function countNumberOfSubarraysNew(arr, k) {
    // Write your code here

let arrLen = arr.length;

let x = [];
for(let i =0; i < arrLen; i++){

    let arrySum = 0;
    for(let j= i; j < arrLen; j++) {
        arrySum += arr[j];
        x.push(arrySum);
    
        
    }
}

const result = x.filter(d => d == k)
console.log(" x ", x);

return result.length;
}


console.log(countNumberOfSubarraysNew([1,2,3,5,6,12,3,5], 5))