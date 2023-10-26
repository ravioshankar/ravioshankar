import  { BST, Node } from "./BinaryTree.ts";

/**
 * BFS
 */
 function breadthFirstSearch(data: BST):( number | undefined )[]{
    const queqe = [];
    const visited = [];
    let current: Node | undefined = data.rootNode;
    queqe.push(current);
    while(queqe.length) {
        current = queqe.shift();
        visited.push(current?.data);
        if(current?.left) queqe.push(current.left);
        if(current?.right) queqe.push(current.right);
    }
    return visited;
   }
   const BSTOfData = new BST();
   [4,6,2,1,3].forEach(d => BSTOfData.create(d));
   console.log("---- BFS ---", breadthFirstSearch(BSTOfData));