/**
 * Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
solution(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
solution(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
 */


function solution(sequence) {
    let removedCount = 0;
  
    for (let i = 1; i < sequence.length; i++) {
      if (sequence[i] <= sequence[i - 1]) {
        removedCount++;
  
        if (removedCount > 1) {
          return false;
        }
  
        if (i > 1 && sequence[i] <= sequence[i - 2]) {
          // Try to remove the current element and check if the previous element can be removed instead
          if (i < sequence.length - 1 && sequence[i + 1] <= sequence[i - 1]) {
            return false;
          }
        }
      }
    }
  
    return true;
  }
  
  // Example usage:
  const sequence1 = [1, 3, 2, 1];
  console.log(solution(sequence1));  // Output: false
  
  const sequence2 = [1, 3, 2];
  console.log(solution(sequence2));  // Output: true
  


