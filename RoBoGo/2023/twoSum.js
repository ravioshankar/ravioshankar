


var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1;

    while (i < j) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
      j--;
    }

  }

};

console.log(twoSum([3, 2, 4],6))
