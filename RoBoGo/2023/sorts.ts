
// selection sort
/**
 * @param arr 
 */
function selectionSort(arr: number[]) {
    let noOfSwaps = 0;
    for(let i = 0 ; i < arr.length - 1; i++){
        for(let j = i+1; j< arr.length; j++){
            if(arr[i] > arr[j]){
                noOfSwaps++;
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                // console.log(" - Swap -", noOfSwaps);
            }
        }
        console.log(" - ", arr);
    }

    console.log("- no Of selection Swaps -", noOfSwaps);
    console.log(" Array ", arr);
    
    }

    /**
     * Bubble sort
     */

    function bubbleSort(arr: number[]){
        let noOfSwaps = 0;
        for(let i = 0; i< arr.length; i++ ){
            for(let j = 0; j < arr.length - 1; j++){
                if(arr[i] > arr[j]){
                    noOfSwaps++;
                    let temp = a[i]
                    a[i] = a[j];
                    a[j] = temp; 
                }
            }
        }

        console.log("- no Of Bubble Swaps -", noOfSwaps);
        console.log(" Array ", arr);
        
    }


    /**
     * Merge sort
     */

 
    function merge(arr: number[], l: number, m: number, r: number)
{
    var n1 = m - l + 1;
    var n2 = r - m;
  
    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
  
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    var i = 0;
  
    // Initial index of second subarray
    var j = 0;
  
    // Initial index of merged subarray
    var k = l;
  
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

    function mergeSort(arr: number[], startArray: number, sizeOfArray: number){
        if(startArray>=sizeOfArray){
            return;//returns recursively
        }

        let middle = startArray + Math.floor((sizeOfArray - startArray)/2);
        // console.log(" Middle ", middle);
        //first half
        mergeSort(arr, startArray, middle);
        // second half
        mergeSort(arr, middle + 1, sizeOfArray);

        merge(arr, startArray, middle, sizeOfArray);
        console.log(" sorted array ", arr);
    }

    // let a = [7,4,1,13,2,5,6,8,11];
    let a = [4,3,2,1];
    // selectionSort(a);
    // bubbleSort(a);
    mergeSort(a,0,3);