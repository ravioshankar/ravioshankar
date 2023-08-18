/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function (digits) {
//   let x = '';
//   let carry = 0;
//   for(let d = digits.length - 1; d >=0; d--){
//     const currentVal = d === (digits.length - 1) ? digits[d] + 1 : digits[d] + carry;
//     if(currentVal == 10){
//       carry = 1;
//       x= '0'+ x;
//     }  else {
//       x = currentVal+x;
//       carry = 0;
//     }

//     if(carry != 0){
//       x = carry + x;
//     }
//   }


//   return x.split("");
// };

var plusOne = function (digits) {

  for(let i = digits.length - 1; i >=0 ; i--){
    digits[i]++;

    if(digits[i] === 10){
      digits[i] = 0;
    }
    else {
      return digits;
    }
  }

 digits.unshift(1);

 return digits;
}


console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
console.log(plusOne([9]))

