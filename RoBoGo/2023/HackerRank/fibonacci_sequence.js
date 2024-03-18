


function get_user_input() {
  let fibo_term;
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question(`enter fibonacci term?`, term => {
    console.log(`Term is  ${term}!`);
    fibo_term = term;
    fibonacci_sequence(fibo_term);
    readline.close()
  });


}

function fibonacci_sequence(fibo_term){
  console.log("Data accepted ", fibo_term);

}

get_user_input();
