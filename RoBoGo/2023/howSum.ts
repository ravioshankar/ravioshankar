

function howSum(targetSum:number, data:number[], memo: any ={}): number[]|null {

    if(targetSum in memo) return memo[targetSum];
    if(targetSum == 0) return [];
    if(targetSum < 0) return null;
    
    for(let d of data){
        const remainder = targetSum - d;
        const remainderResult: number[] | null = howSum(remainder, data, memo);
        if(remainderResult != null) {
            memo[targetSum] = [...remainderResult, d];
            return memo[targetSum];
        }
    }

    return  null;

}


console.log(howSum(7, [3,5,6,3,1]));

console.log(howSum(5, [1,2,3]));

// console.log(howSum(60, [5,5,-1,3,1]));
