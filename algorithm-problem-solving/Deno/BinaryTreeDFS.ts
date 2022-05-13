import  { BST, Node } from "./BinaryTree.ts";


/**
 * DFS
 * 1. PreOrder() -- Top to Bottom (root -> left - > right)
 * 2. PostOrder() - Bottom to Top ( left-> right -> root)
 * 3. InOrder() -- (left -> root -> right)
 */


function inOrderDFS(data: BST): number[] {

    const current = data.rootNode;
    const visited: number[] = []
    
    const traverse = (node: Node) => {
      if(node.left) traverse(node.left);
      visited.push(node.data);
      if(node.right) traverse(node.right);
    }

    traverse(current);

    return visited;
}


function preOrderDFS(data: BST): number[] {

    const current = data.rootNode;
    const visited: number[] = []
    
    const traverse = (node: Node) => {
      visited.push(node.data);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(current);

    return visited;
}

function postOrderDFS(data: BST): number[] {

    const current = data.rootNode;
    const visited: number[] = []
    
    const traverse = (node: Node) => {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      visited.push(node.data);

    }

    traverse(current);

    return visited;
}

const inpt = new BST();

[24, 42, 4,6,2,8,1,3].forEach(d => inpt.create(d));

console.log(postOrderDFS(inpt));
console.log(inOrderDFS(inpt));
console.log(preOrderDFS(inpt));
