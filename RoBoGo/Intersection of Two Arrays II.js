/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {


//   const result = [];

//   let arrlen = nums1.length <= nums2.length ? nums1.length : nums2.length;
//   for (let i = 0; i < arrlen; i++) {
//     if (nums1.length <= nums2.length) {
//       let foundI = nums2.findIndex(n => n === nums1[i]);
//       if (foundI >= 0) {
//         result.push(nums1[i]);
//         nums2.splice(foundI, 1);
//         nums1.splice(i, 1);
//         i--;
//       }
//       arrlen = nums1.length;
//     } else {
//       let foundII = nums1.findIndex(n => n === nums2[i]);
//       if (foundII >= 0) {
//         result.push(nums2[i]);
//         nums1.splice(foundII, 1);
//         nums2.splice(i, 1);
//         i--;
//       }
//       arrlen = nums2.length;
//     }
//   }

//   return result;


// };

var intersect = function (nums1, nums2) {
  const result = [];
  const numCount1 = countNumbers(nums1);
  const numCount2 = countNumbers(nums2);

  for (const num of nums1) {
    if (numCount2[num] > 0) {
      result.push(num);
      numCount2[num]--;
    }
  }

  return result;
};

function countNumbers(nums) {
  const numCount = {};

  for (const num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  return numCount;
}


console.log(intersect([2, 3, 5, 6], [3, 5, 9]))
console.log(intersect([2, 1], [1,1]))
console.log(intersect([1,2], [1,2]))


