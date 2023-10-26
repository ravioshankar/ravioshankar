
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  let subArrays = {};
  let total = nums[0];
  subArrays[0]= nums[0];
  for (let index = 1; index < nums.length; index++) {
    total += nums[index];
    const element = nums[index];
    if (!(index in subArrays)) {
      subArrays[index] = element;

      const key = `${index - 1}-${index}`;
      subArrays[key] = subArrays[index] + subArrays[index -1];
}
  }

  return subArrays;

};


console.log(maxSubArray([-2, 1]))
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))


