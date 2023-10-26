/**
 *
 * Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into n and m
substrings
 respectively, such that:

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
Note: a + b is the concatenation of strings a and b.

Example 1:


Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Explanation: One way to obtain s3 is:
Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
Since s3 can be obtained by interleaving s1 and s2, we return true.
Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.
Example 3:

Input: s1 = "", s2 = "", s3 = ""
Output: true


Constraints:

0 <= s1.length, s2.length <= 100
0 <= s3.length <= 200
s1, s2, and s3 consist of lowercase English letters.


Follow up: Could you solve it using only O(s2.length) additional memory space?
 */




/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {

  if (s1 + s2 === s3) return true;
  let i = 0;
  let j = 0;
  let match = 0;
  for (let k = 0; k < s3.length; k++) {


    if (s3[k] === s1[i] && s3[k] === s2[j]) {
      match++;
      i++;
      j++;
    } else {

      if (s3[k] === s1[i] && s3[k] !== s2[j]) {
        i++;
        j = j - match;
        match = 0;
      }

      if (s3[k] !== s1[i] && s3[k] === s2[j]) {
        j++;
        i = i - match;
        match = 0;
      }
    }
  }

  if (s3.length === i + j && s3.length == s1.length + s2.length) {
    return true;
  }

  return false;

  //     let wordbank = {};
  //     for(let word of [s1,s2]){
  //    for(let ch of word){
  //         if(ch in wordbank){
  //             wordbank[ch] =  wordbank[ch] + 1;
  //         } else {
  //             wordbank[ch] = 1;
  //         }
  //     }
  //     }

  // console.log(wordbank)

  //   for(let ch of s3){
  //         if(ch in wordbank){
  //             wordbank[ch] =  wordbank[ch] - 1;
  //         } else {
  //             return false;
  //         }
  //     }

  // return true;

  // function explore (st1,st2,s3) {
  //     if(st1.charAt(0) === s3.charAt(0) ) {
  //         st1.replace(st1.charAt(0),"");
  //         s3.replace(s3.charAt(0),"");
  //     } else if (st2 === s3.charAt(0)) {
  //         st2.replace(st2.charAt(0),"");
  //         s3.replace(s3.charAt(0),"");
  //     }
  //     if(st1.charAt(0) !== s3.charAt(0) || st2.charAt(0) !== s3.charAt(0)) return false;
  // }


  //  return explore(s1,s2,s3);





};


console.log(isInterleave("aabd", "abdc", "aabdabcd")) // true
