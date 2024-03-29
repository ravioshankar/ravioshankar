/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
 * the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and
 * it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house,
return the maximum amount of money you can rob tonight without alerting the police.
 *
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

  let robCollection = new Array(0);
  robCollection[0] = nums[0];
  robCollection[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length ; i++) {
    robCollection[i] = Math.max(robCollection[i - 1], robCollection[i - 2]+ nums[i])
  }
  return robCollection[nums.length -1];
};


console.log(rob([2, 7, 9, 3, 1])); // 12

console.log(rob([1, 2, 3, 1])); // 4

console.log(rob([ 3,1,3])); // 6
console.log(rob([3, 1])); // 3
console.log(rob([1])); // 1
console.log(rob([0])); // 1






