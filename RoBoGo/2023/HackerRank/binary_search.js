

function binary_search(inputList, searchItem) {
    let first = 0;
    let last = inputList.length - 1;
    console.log('last ', last)
    while( parseInt(first) <= parseInt(last) ){
        const mid = Math.floor((parseInt(first) + parseInt(last))/2);
        console.log('first', first);
        console.log('mid', mid);
        console.log('last', last);
        console.log('searchItem', searchItem);
        console.log('inputList[mid]', inputList[mid]);

        if(inputList[mid] == searchItem){
            return true;
        }else if(inputList[mid] > searchItem) {
            last = mid-1;
        } else {
            first = mid + 1;
        }
    }
    return false;
}

let inputdata = [2,3,4,5,7,8,9,10,13,15];

console.log(binary_search(inputdata,50));