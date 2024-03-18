function solution(arr) {

   arr.unshift(arr.pop());

   return arr;
}


console.log(solution(['aa','bb', 'ab']))