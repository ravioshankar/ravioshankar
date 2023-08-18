// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var rotate = function (nums, k) {
  const n = nums.length;

  k = k % n; // reduce k to be within array

  // reverse whole

  reverse(nums, 0, n - 1);

  // reverse first part
  reverse(nums, 0, k - 1);

  // reverse second part
  reverse(nums, k, n - 1);

  return nums;
}


var reverse = function (nums, start, end) {

  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }

  nums;
}


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
