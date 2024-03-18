/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   let arrLen = nums.length - 1;
//   for (let i = 0; i < arrLen;) {
//     if(nums[i] > 0){
//       while (nums[i] > 0 && i < arrLen ) {
//         i++;
//       }
//     } else {
//       const temp = i;
//       while (nums[i] === 0 && i < arrLen) {
//         i++;
//       }
//       const x = nums[temp];
//       nums[temp] = nums[i];
//       nums[i] = x;
//       i = temp + 1;
//     }
//   }
//   return nums;
// };

var moveZeroes = function (nums) {
  let nonZeroInx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroInx] = nums[i];
      nonZeroInx++;
    }
  }

  for(let j = nonZeroInx; j < nums.length; j++){
    nums[j]= 0;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 0, 3, 12]));
console.log(moveZeroes([1, 0, 0, 0, 12]));
console.log(moveZeroes([1, 0, 0, 0]));
console.log(moveZeroes([73348, 66106, -85359, 53996, 18849, -6590, -53381, -86613, -41065, 83457, 0])); // [73348,66106,-85359,53996,18849,-6590,-53381,-86613,-41065,83457,0]
console.log(moveZeroes([0, 0, 0, 1]));







