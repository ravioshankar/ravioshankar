/**
 *
 * You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.

A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

Return the length longest chain which can be formed.

You do not need to use up all the given intervals. You can select pairs in any order.



Example 1:

Input: pairs = [[1,2],[2,3],[3,4]]
Output: 2
Explanation: The longest chain is [1,2] -> [3,4].
Example 2:

Input: pairs = [[1,2],[7,8],[4,5]]
Output: 3
Explanation: The longest chain is [1,2] -> [4,5] -> [7,8].


Constraints:

n == pairs.length
1 <= n <= 1000
-1000 <= lefti < righti <= 1000
 */



/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {

  pairs.sort(function (a,b) {
    return a[1]-b[1];
  })


  let cur = Number.MIN_SAFE_INTEGER, ans = 0;

  for (const [start, end] of pairs) {
    if (cur < start) {
      cur = end;
      ans++;
    }
  }

  console.log('Pairs ', pairs);
  return ans;

};


console.log(findLongestChain([[1, 2], [2, 3], [3, 4]])) // 2
// console.log(findLongestChain([[1, 2], [7, 8], [4, 5]])) // 3
// console.log(findLongestChain([[3, 4], [2, 3], [1, 2]])) // 2
// console.log(findLongestChain([[-10, -8], [8, 9], [-5, 0], [6, 10], [-6, -4], [1, 7], [9, 10], [-4, 7]])) //4


