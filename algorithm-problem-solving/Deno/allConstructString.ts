/**
 * How many ways string can be constructed by given array of words
 */



function allConstruct(targetWord: string, wordBank: string[] ): string[][] {

    if(targetWord === '' ) return [[]];
    const result = [];
    for(let word of wordBank) {
        if(targetWord.indexOf(word) == 0){
            const suffix = targetWord.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays: string[][]|undefined = suffixWays?.map( way => [word, ...way]);
            if(targetWays) result.push(...targetWays)
        }
    }

    return result;
}



console.log(allConstruct('abcdef', ['ab', 'abc', 'dc', 'def','abcd','ef', 'c']))