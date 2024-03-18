function hourglassSum(arr: number[][]): number {
    // Write your code here
let hourglassSum = 0;
let maxHourglassSum = 0;
let sums = [];

let rowStart = 0;
let colStart = 0;

while(rowStart <= 3 && colStart <= 4) {
    let arrText=''
    for(let i = rowStart; i <= rowStart + 2; i++){
        for(let j = colStart; j <= colStart + 2; j++){
            if((i == rowStart + 1 && j == colStart + 0) || (i == rowStart + 1 && j == colStart + 2) ){
                arrText = ' '+arrText;
            } else {
                arrText+=arr[i][j]+' ';
                hourglassSum+=arr[i][j];
            }
        }
        console.log(arrText);
        arrText='';
    }

    sums.push(hourglassSum);
    hourglassSum = 0;
    colStart++;
    if(colStart == 4 ) {
    console.log(" --- Coloum  ---", colStart);
    console.log(" --- Row  ---", rowStart);

        rowStart++;
        colStart = 0;
    }
  

}



return Math.max(...sums);
}

let arr = [[1, 1, 1 ,0, 0 ,0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1 ,0 ,0 ,0],
[0 ,0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]]

console.log(hourglassSum(arr));

// negative values

let nValues = 
[[-1, -1, 0, -9, -2, -2],
[-2, -1, -6, -8, -2, -5],
[-1, -1, -1, -2, -3, -4],
[-1, -9, -2, -4, -4, -5],
[-7, -3, -3, -2, -9, -9],
[-1, -3, -1, -2, -4, -5]]

console.log(hourglassSum(nValues));