/**
 * 4. Median of Two Sorted Arrays
Hard

15238

1910

Add to List

Share
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
 */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    
    let combinedArray;
    let median;
    if(Math.max(...nums1) < Math.min(...nums2)){
        combinedArray = nums1.concat(nums2);
    } else if(Math.min(...nums1) > Math.max(...nums2)) {
         combinedArray = nums2.concat(nums1);
    } else  {
        combinedArray = nums2.concat(nums1).sort((a,b) => a - b);
    }
    let arrLenght = combinedArray.length;
    if(arrLenght % 2 == 0)
        {
            median = (combinedArray[arrLenght/2] + combinedArray[(arrLenght)/2 - 1])/2;
        } else {
            median = combinedArray[Math.floor(arrLenght/2)]
        }
    
    return median;
}
// 2
console.log(findMedianSortedArrays([1,3], [2]))
// 2.5
console.log(findMedianSortedArrays([1,2], [3,4]))
