function longestCommonPrefix(strs: string[]): string {

    let first = strs[0];
    let currentPrefix = "";
    let prefix = "";
    let match: boolean = true;

    for(let i = 0 ; i <= first.length; i++) {
        if(match){
            prefix = currentPrefix;
        }
        currentPrefix += first[i];
        let j= 0;
        
        while(j < strs.length && match){

            match = strs[j].startsWith(currentPrefix);
            j++;
        }
    }
    return prefix;
};

let strs = ["flower","flow","flight"];
// output - fl

console.log(longestCommonPrefix(strs));

let strs1 = ["dog","racecar","car"];

console.log(longestCommonPrefix(strs1));

let strs2 = ["a"];

console.log(longestCommonPrefix(strs2));
