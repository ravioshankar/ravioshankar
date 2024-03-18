/*
A valid path is a string that starts with a slash "/" followed by a series of folder names separated by slashes. Example: "/ab/cd/ef"

There are two folder names that are not true folder names, but have special meaning. They are:
Single dot is a null operation. "/ab/cd/./ef" is the same as "/ab/cd/ef"
Double dot means go up one directory. "/ab/cd/../ef" is the same as "/ab/ef"
These two patterns must be by themselves. If they are part of any other combination of characters, there is no special treatment e.g. "/..." or "/.test"

"/ab/cd/./ef" -> "/ab/cd/ef"
"/ab/cd/../ef" -> "/ab/ef"
"/ab/cd/../.././ef" -> "/ef"
"/ab/cd/.../ef" -> "/ab/cd/.../ef"
*/

function validPath(path) {
    let arr = path.split('/');
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '.') {
            continue;
        }
        if (arr[i] === '..') {
            if (stack.length > 0) {
                stack.pop();
            }   
        } else {
            stack.push(arr[i]);
        }
    }
    return stack.join('/');
}

console.log(validPath('/ab/cd/./ef'));
console.log(validPath('/ab/cd/../.././ef'));
console.log(validPath('/ab/cd/.../ef" -> "/ab/cd/.../ef'));