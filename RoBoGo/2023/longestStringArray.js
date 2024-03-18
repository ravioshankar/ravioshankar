/**
 * Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].


 */

function solution(inputArray) {
 let max = Math.max(...inputArray.map(x => x.length));

 return inputArray.filter(ele => ele.length === max );
}

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));
