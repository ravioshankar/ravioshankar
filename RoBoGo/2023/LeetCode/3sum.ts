/**
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
Accepted
1,779,887
Submissions
5,812,044
 */

function threeSum(nums: number[]): number[][] {
    let output: number[][]=[]
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    if((output.filter(d => arrayEquals(d,[nums[i], nums[j],nums[k]])).length == 0) ){
                       output.push([nums[i], nums[j],nums[k]]);
                    }
                   
                }
            }
        }
    }

    return Array.from(output.values());
};

function arrayEquals(a: number[], b:number[]) {

    const d = b.every((val) => a.includes(val));

    
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
   b.every((val) => a.includes(val));

}

function testX(target:number,nums: number[]){

    if()

    for(let n of nums){


    }



}


// console.log(threeSum([-1,0,1,2,-1,-4])); // [ [ -1, 0, 1 ], [ -1, 2, -1 ] ]
// console.log(threeSum([0,0,0,0])); // [[0,0,0]]
// console.log(threeSum([-1,0,1,0])); // [[-1,0,1]]
// console.log(threeSum([-2,0,1,1,2])); // [[-2,0,2],[-2,1,1]]
console.log(testX([-2,0,1,1,2])); // [[-2,0,2],[-2,1,1]]
