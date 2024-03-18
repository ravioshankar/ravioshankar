
/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let current = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(current === nums[i]){

            nums.splice(i,1);
            i--;

        }
        current = nums[i];

    }
    return nums;
};


console.log(removeDuplicates([0,0,0,1,1,2,2,2,2,4,5,6,7,7,8,9]))
