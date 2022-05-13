
function withinHourCount(data: number[]): number[][] {

    let stack: number[] = [];
    let output: number[][] = [];

    for (let j = 0; j < data.length; j++) {
        let current = data[j];
        stack = [];
        for (let d = j; d < data.length; d++) {
            if (data[d] - current <= 100) {
                stack.push(data[d]);
            } else {
                break;
            }
        }
        if (stack.length >= 3) {
            output.push(stack);
        }
    }
    return output;
}


console.log(withinHourCount([1315, 1355, 1405, 1416]));