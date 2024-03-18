/**
 * 1359. Count All Valid Pickup and Delivery Options
Hard

1148

117

Add to List

Share
Given n orders, each order consist in pickup and delivery services. 

Count all valid pickup/delivery possible sequences such that delivery(i) is always after of pickup(i). 

Since the answer may be too large, return it modulo 10^9 + 7.

 

Example 1:

Input: n = 1
Output: 1
Explanation: Unique order (P1, D1), Delivery 1 always is after of Pickup 1.
Example 2:

Input: n = 2
Output: 6
Explanation: All possible orders: 
(P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).
This is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2.
Example 3:

Input: n = 3
Output: 90
 

Constraints:

1 <= n <= 500
 */


function countOrders(n: number): number {

    let orders: any[]= [];

    const validCombinations = new Set();
    for(let i = 1; i<= n; i++){
        orders.push(`P${i}`);
        orders.push(`D${i}`);

    }
    console.log(orders);
    let combo = ''
    for(let i = 0 ; i < orders.length; i++) {
        for(let j = i+1 ; j < orders.length; j++) {
            combo = combo.concat(orders[i]).concat(orders[j]);

            if(  orders[i].charAt(0) != orders[j].charAt(0) && orders[i].charAt(1) < orders[j].charAt(1)) {
                combo.concat(orders[i]).concat(orders[j]);
            }
        }

        validCombinations.add(combo)
        combo = '';
    }

console.log(validCombinations);
    return 1;
}


console.log(countOrders(3))