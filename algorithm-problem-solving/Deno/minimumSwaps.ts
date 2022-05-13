// Complete the minimumSwaps function below.
function minimumSwaps(arr: number[]) {
    let swapTable: any = {};

    for(let i = 0; i < arr.length; i++){
        swapTable[arr[i]]=i;
    }
    console.log("swapTable ", Object.keys(swapTable));
}

let dataArray = [4,3,2,1]
// [7,4,1,13,2,5,6,8,11];
minimumSwaps(dataArray);
