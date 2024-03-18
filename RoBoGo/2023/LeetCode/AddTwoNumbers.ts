/**
 *  Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 */

 class ListNode {
         val: number
         next: ListNode | null
         constructor(val?: number, next?: ListNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.next = (next===undefined ? null : next)
         }
     }
 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let headL1 = l1;
    let headL2 = l2;
    let combinedNode = []
    while(headL1 != null && headL2 != null) {
        let sumNode = headL2.val+ headL1.val;
        let newNode = new ListNode();
        newNode.val = sumNode;
            combinedNode.push(newNode);        
        headL1 = headL1.next;
        headL2 = headL2.next;
    }

    let head = combinedNode[0];
    
    for(let n of combinedNode){
        head.next = n;
        head = n;
    }

    return null;
};




/**
 * 
[2,4,3]
[5,6,4]
[0]
[0]
[9,9,9,9,9,9,9]
 */
let first = new ListNode();
first.val = 2;
let second = new ListNode();
first.next = second;
second.val = 4;
let third = new ListNode();
second.next = third;
third.val= 3;

let firstL2 = new ListNode();
firstL2.val = 5;
let secondL2 = new ListNode();
firstL2.next = second;
secondL2.val = 6;
let thirdL2 = new ListNode();
secondL2.next = third;
thirdL2.val= 4;


addTwoNumbers(first, firstL2);