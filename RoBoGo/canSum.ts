

function canSum(targetSum:number, data:number[]){
    
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;


    for(let num of data){

        const remainder = targetSum - num;

        if(canSum(remainder, data) == true){
            return true
        }
    }

    return false;
}


console.log(canSum(7, [2,3])) // true
console.log(canSum(7, [8,3])) // false
console.log(canSum(56, [8,3])) // false

