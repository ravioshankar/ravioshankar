/**
 * given n number of fib find prime numbers
 * @param n 
 * @returns 
 */
const solution = (n: number) => {
    // Type your solution here 
    let result = [];
    let fibNumbers = fibo(n);
    
      for(let f of fibNumbers) {
          console.log(f)
          if(isPrime(f)){
              result.push(f);
          }
        }
  console.log("result is", result);
    
    return result;
};

function fibo(n: number, res:number[]=[], count=1, last =0 ): number[] {
    if(n) return fibo(n-1, res.concat(count), count+last, last = count);
    return res;
          
}

function isPrime(num: number){
  
        if(num <=1 ) return false;
        if(num == 2) return true;
        let len = 2;
        while( len < num) {
            if(num%len == 0){
                return false;
            }
            len++;
        }
        
        return true;
    
    
}

// [ 2, 3, 5, 13 ]
console.log(" Result ", solution(8)); 