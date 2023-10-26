

/**
 * Minimum Absolute Difference in BST
 * 
 * Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

Example 1:


Input: root = [4,2,6,1,3]
Output: 1
Example 2:


Input: root = [1,0,48,null,null,12,49]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 104].
0 <= Node.val <= 105
 */

import { BST, Node } from "./BinaryTree.ts";


function MinimumAbsoluteDifferenceInBST(bst: BST){

    const visited: number[] = [];
    const current: Node|undefined = bst.rootNode;
   
    let minAbsoluteDiff = undefined;
   const travers = (data:Node) => {
    if(data.left) travers(data.left);
    visited.push(data.data);
    if(data.right) travers(data.right)
   }

   travers(current);

   for( let i = 0; i < visited.length; i ++){
       const diff = visited[i+ 1] - visited[i];
       if( !minAbsoluteDiff) minAbsoluteDiff = diff;
       if(diff < minAbsoluteDiff) minAbsoluteDiff = diff;
   }

   console.log(visited)
   return minAbsoluteDiff;
}

const inputData = new BST();

[4,2,6,1,3].forEach(d => inputData.create(d));

console.log(MinimumAbsoluteDifferenceInBST(inputData));