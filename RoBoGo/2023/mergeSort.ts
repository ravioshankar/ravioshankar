function merge(left:number[], right:number[]) {
    let merged: any[] = [];

    while ( left.length > 0 && right.length > 0) {
        
      if ( left[0] < right[0]) {
        merged.push(left.shift());
      } else {
        merged.push(right.shift());
      }
        
    }

    return merged.concat(left.slice().concat(right.slice()))
  }

function mergeSort(array:number[]) {
    if (array.length <= 1) {
      return array;
    }

    let middleIndex = Math.floor(array.length / 2);

    const left:number[] = mergeSort(array.slice(0, middleIndex));
    const right:number[] = mergeSort(array.slice(middleIndex, array.length));
    
      
    return merge(left, right);
      
  }
  


 

let array = [46,6,7,8,8,2,4]
console.log(mergeSort(array));
  


