
/**
 * 3. Longest Substring Without Repeating Characters
 * 
 * Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
Accepted
3,005,410
Submissions
9,148,331
 * @param s 
 */
function lengthOfLongestSubstring(s: string): number {

let subStringTable: any = {};

for(let i =0 ; i < s.length; i++){
    s.substring(0,)

}

for(let sub of s) {
    if(sub in subStringTable){
        subStringTable[sub]= subStringTable[sub]+1;
    } else {
        subStringTable[sub] = 1;
    }
}

console.log(subStringTable)

    return 0;

};


lengthOfLongestSubstring("melcome");