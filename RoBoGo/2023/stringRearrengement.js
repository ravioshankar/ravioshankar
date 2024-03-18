/**
 * Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

Example

    For inputArray = ["aba", "bbb", "bab"], the output should be
    solution(inputArray) = false.

    There are 6 possible arrangements for these strings:
        ["aba", "bbb", "bab"]
        ["aba", "bab", "bbb"]
        ["bbb", "aba", "bab"]
        ["bbb", "bab", "aba"]
        ["bab", "bbb", "aba"]
        ["bab", "aba", "bbb"]

    None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

    For inputArray = ["ab", "bb", "aa"], the output should be
    solution(inputArray) = true.

    It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

 */

function solution(inputArray) {
  function validDiff(str1, str2) {
    // let str = [...str1, ...str2].sort();
    // let srSet = new Set(str);
    // let result = true;
    // Array.from(srSet).forEach((ele) => {
    //   if (str1.includes(ele) && str2.includes(ele)) {
    //      str1 = str1.replaceAll(ele, '');
    //      str2 = str2.replaceAll(ele, '');
    //   }

    //   if (str1 === str2) {
    //     return false;
    //   }
    // });
    // return result;

    let mismatches = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) mismatches++;
      if (mismatches > 1) break;
    }
    return mismatches === 1;
  }

  let combination = (n) => {
    if (n === 1) {
      return 1;
    }
    return n * combination(n - 1);
  };

  function arraymove(arr) {
    arr.unshift(arr.pop());
    return arr;
  }

  let limit = combination(inputArray.length);
  let data = inputArray;

  for (let i = 0; i < limit; i++) {
    for (let j = 1; j < data.length; j++) {
      let diff = validDiff(data[j - 1], data[j]);
      if (!diff) {
        break;
      }
      if (j === data.length - 1) {
        return true;
      }
    }
    data = arraymove(data);
  }
  return false;
}

// console.log(solution(["aa", "ab", "bb"])); // true
// console.log(solution(["aba", "bbb", "bab"])); // false
// console.log(solution(["zzzzab", "zzzzbb", "zzzzaa"])); // true
// console.log(solution(["abc", "bef", "bcc", "bec", "bbc", "bdc"])); // true
console.log(solution([ "bdc", "bbc", "abc","bcc", "bec", "bef"])); // true


/**
 *
 *
 *  fully working solution
 *
 * function solution(a) {
  for (let i = 0; i < a.length; i++) {
    let remaining = findNext(a[i], a);
    if (remaining.length === 0) return true;
  }
  return false;
}

function findNext(current, a) {
  if (a.length === 0) return a;
  for (let i = 0; i < a.length; i++) {
    if (differsByOneChar(current, a[i])) {
      let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i+1)));
      if (remaining.length === 0) return remaining;
    }
  }
  return a;
}

function differsByOneChar(s1, s2) {
  let mismatches = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) mismatches++;
    if (mismatches > 1) break;
  }
  return mismatches === 1;
}
 */
