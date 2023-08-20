/**
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

  let updatedText = s.toLowerCase().replaceAll(/[^a-z0-9]/g, "");

  let i = 0;
  let j = updatedText.length - 1;

  while (i <= j) {
    if (updatedText.charAt(i) === updatedText.charAt(j)) {
      i++;
      j--;
    } else {
      return false;
    }
  }


  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));

