function gridTraveller(row: number, col: number, memo: any={}): number{

    const key = `${row}-${col}`;
    if(key in memo) return memo[key];
    if(row==1 && col==1) return 1;
    if(row==0 || col==0) return 0;

    memo[key] = gridTraveller(row-1,col, memo) + gridTraveller(row, col-1, memo);
    return memo[key];
}

console.log(gridTraveller(1,1))
console.log(gridTraveller(0,1))
console.log(gridTraveller(3,3))
console.log(gridTraveller(6,6))
console.log(gridTraveller(18,18))



