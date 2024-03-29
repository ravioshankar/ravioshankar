/**
 * 
 * There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.

Example

Index the array from . The number on each cloud is its index in the list so the player must avoid the clouds at indices  and . They could follow these two paths:  or . The first path takes  jumps while the second takes . Return .

Function Description

Complete the jumpingOnClouds function in the editor below.

jumpingOnClouds has the following parameter(s):

int c[n]: an array of binary integers
Returns

int: the minimum number of jumps required
Input Format

The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

Constraints

Output Format

Print the minimum number of jumps needed to win the game.

Sample Input 0

7
0 0 1 0 0 1 0
Sample Output 0

4
Explanation 0:
The player must avoid  and . The game can be won with a minimum of  jumps:

jump(2).png

Sample Input 1

6
0 0 0 0 1 0
Sample Output 1

3
Explanation 1:
The only thundercloud to avoid is . The game can be won in  jumps:

jump(5).png
 */


/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c: number[]) {
    // Write your code here
    let totalJumps = 0;
    let i = 0;
    let skip = false;
    let current;
    let next;
    let future;
  if(c.length < 1) {
      return 0;
  }  

  if(c.length == 2 && c[1] == 0){
      return 1;
  } else if(c.length == 2 && c[1] == 1) {
      return 0;
  }

  if(c.length > 2){
    while(i < c.length - 1){
        if(c.length >= i ){
            current = c[i];
            next = c[i+1];
            future = c[i+2];
        } else {
            current = c[i];
            next = c[i];
            future = c[i];
        }
      
        if((current == next) && (next == future)){
            totalJumps++;
            skip = true;
        } else if((current == next) && (next != future)){
            totalJumps++;
            skip = false;
        } else if( current != next ){
            totalJumps++;
            skip = true;
        }
        if(skip){
            i = i + 2;
        } else {
            i++;
        }
    }

  }
    return totalJumps;
}

console.log(jumpingOnClouds([0,0,1,0,0,1,0]))