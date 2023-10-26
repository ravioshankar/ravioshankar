/**
 * Write a function that determines whether the left or right branch of the tree is larger. The size of each branch is the sum of the node values. The function should return the string 
 * "Right"  if the right side is larger and "Left"  if the left side is larger.  If the tree has 
 *  nodes or if the size of the branches are equal, return the empty string.
 * 
 * example - [3,6,2,9,-1,10]
 * answer - left
 * [1, 4, 100, 5]
 * - right
 * [1, 10, 5, 1, 0, 6]
 * ""
 */


function getBiggerSubtree(arr: number[]){
    if(arr == null || arr.length==0) return "";
    let leftSum = 0;
    let rightSum = 0;
  
  // we need two loops here
  // one for left and one for right
  // we keep track of the left and right sums separately
  
  let left = 1;
  let right = 2;
  
  leftSum = getTreeSum(arr,left);
  rightSum = getTreeSum(arr,right);
  
  if(leftSum > rightSum) return "Left";
  else if (leftSum < rightSum) return "Right";
  return "";
  
  }

function getTreeSum(arr: number[], i: number){
    if(i> arr.length-1 || arr[i]==-1) return 0;
     let leftChild = 2*i+1;
     let rightChild = 2*i+2;
     let sum = 0;
    if(i <arr.length){
        sum = arr[i] +getTreeSum(arr,leftChild) +getTreeSum(arr,rightChild);
    }
    return sum;
}

console.log(getBiggerSubtree([3,6,2,9,-1,10]));