

function reverseString(inputStr: string): string {

    if(inputStr == ''){
        return '';
    }

    return  reverseString(inputStr.substring(1)) + inputStr.charAt(0);
}


console.log(reverseString("welcome To Typescript"))
console.log(reverseString("/ab/cd/../ef"))
