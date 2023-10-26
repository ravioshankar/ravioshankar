/**
 * Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
solution(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
 */


// function solution(inputString) {
//     if(inputString.indexOf('(') === -1){
//         return inputString;
//     }
//     function reverse(data) {
//         if(data === ''){
//             return '';
//         } 
//         return reverse(data.substring(1))+data.charAt(0)
//     }
//     let a,b;
//     function bracketData(inputStr) {
//      a = inputStr.indexOf('(');
//      b = inputStr.indexOf(')');

//         return inputStr.substring(a+1,b);
//     }
    
// const temp = bracketData(inputString);


// return solution(inputString.substring(0, a)+reverse(temp)+ inputString.substring(b+1));
// }


function solution(inputString){

    let result = "";
    let stack = [];

    for(let char of inputString){

        if(char === '('){
            stack.push(result);
            result = "";

        } else if( char === ')') {
            let lastResult = stack.pop();
            console.log(lastResult)
            result = lastResult + result.split('').reverse().join('');
        } else {
            result += char;
        }
    }

    return result;
}

// console.log(solution('foo(bar)baz')) // "foorabbaz"

console.log(solution("foo(bar(baz))blim")) // "foobazrabblim"

