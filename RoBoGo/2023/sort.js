

// sort

function bubbleSort(arr) {


    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
return arr;

}

console.log(bubbleSort([18, 9, 10, 2, 13, 41, 5, 6, 37, ]));
