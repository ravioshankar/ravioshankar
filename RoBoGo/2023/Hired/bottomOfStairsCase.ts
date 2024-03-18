/**
 * your are at bottom of staircase with n stairs, you can jum 1,2 or 3 stairs at a time. 
 * how many different ways can you jump up the stairs. 
 * 
 * input = 3, # Output total ways = 4
 * 1. 1,1,1
 * 2. 1,2
 * 3. 2,1
 * 4. 3
 */


function howManyWays(n: number): number {
  if(n==0) return 1;
  if(n < 0) return 0
  return howManyWays(n-1)+howManyWays(n-2)+howManyWays(n-3);
}

console.log(howManyWays(3));
