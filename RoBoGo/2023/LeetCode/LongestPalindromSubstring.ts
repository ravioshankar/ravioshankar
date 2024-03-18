/**
 * 
 * 5. Longest Palindromic Substring
Medium

16242

955

Add to List

Share
Given a string s, return the longest palindromic substring in s.
Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
 */


function longestPalindrome(str: string, ): boolean| {} {

    const result: any ={};
    // if(str.length == 1) return true;
    const memo:any ={};
    // if(str in memo) return memo[str]; 

    let subStr = '';
    for(let j = 0; j< str.length; j++){
        subStr = str[j];
    for(let s = j+1; s < str.length; s++){
        subStr +=  str[s];
        
        // console.log("-subString-", subStr);
        // if(subStr.charAt(0) == subStr.charAt(subStr.length - 1)) {
        //     // memo[subStr]= subStr.length;
            
                const isPal =  isSubPalindrome(subStr, memo);
                memo[subStr]= isPal;
                if(isPal == true){
                    result[subStr]= subStr.length;
                }
           
        // }
        
        
    }
}
    return result;
}

function isSubPalindrome(st:string, memo: any ={}): boolean{

    if(st in memo) return memo[st];
    if(st.length == 1) return true;

    if(st.charAt(0) == st.charAt(st.length - 1)) {
        
        memo[st] = isSubPalindrome(st.substring(1,st.length - 1));

        return memo[st];
    }
    
    return false;
}


console.log("palindrome", longestPalindrome("kaayaakisgreat"));

// console.log(isSubPalindrome("kaayaak"));