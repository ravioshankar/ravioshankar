
/**
 * Generate binary tree
 */

export class Node {
    data:number;
    left:Node|undefined;
    right: Node|undefined;
    constructor(data: number, left?:Node|undefined, right?:Node|undefined ){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export class BST {
    rootNode!: Node;
    constructor() {
    }

    create(data:number){
        const newNode =  new Node(data);
        if(!this.rootNode){
            this.rootNode = newNode;
        } 
        let current = this.rootNode;

        while(current){
            if(data === current.data) return undefined;
            if( data < current.data) {
                if(!current.left){
                    current.left = newNode;
                }
                current = current.left;
            } else if( data > current.data){
                if(!current.right){
                    current.right = newNode;
                }
                current = current.right;
            } 
        }
    }

    search() {

    }


   minimumAbsoluteDiff(data: BST ) {


    if(data.rootNode === undefined) return undefined;

   }


}

// const bst = new BST();
// bst.create(54);
// bst.create(11);
// bst.create(60);
// bst.create(5);
// bst.create(35);
// bst.create(65);
// console.log(" ------ final bst -------- ", bst );

const bstArray = new BST();

[4,2,6,1,3].forEach(d => bstArray.create(d));

console.log(" ----final---- ", bstArray );

