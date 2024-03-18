/**
 * check whether two strings are anagrams 
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 *  typically using all the original letters exactly once.
 * 
 * Example - 
 * 1. LISTEN - SILENT
 * 2. SALESMAN - NAMELESS
 */


function CheckAnagrams(str1: string, str2: string): boolean{

    // find length is equal 
    // frequency of each charactor 

    let str1Frequency: any = {};
    let str2Frequency: any = {};

    if(str1.length != str2.length) return false;

    for(const s of str1){
        if(s in str1Frequency) {
            str1Frequency[s] = str1Frequency[s] + 1;
        } else {
            str1Frequency[s] = 1;
        }
    }

    for(const s of str2){
        if(s in str2Frequency) {
            str2Frequency[s] = str2Frequency[s] + 1;
        } else {
            str2Frequency[s] = 1;
        }
    }

    console.log(str1Frequency);
    console.log(str2Frequency);

    return false;
};


CheckAnagrams("LISTEN", "SILENT");