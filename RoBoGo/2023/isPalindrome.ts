function isPalindrome(input:string): boolean{
    
    // base case 

    if(input.length == 0 || input.length == 1){
        return true;
    }

    if(input.charAt(0).toLocaleLowerCase() == input.charAt(input.length -1).toLocaleLowerCase()){
         return isPalindrome(input.substring(1, input.length -1))
    }
    
    return false;
}

console.log(isPalindrome("kayaK"));
console.log(isPalindrome("kayK"));
