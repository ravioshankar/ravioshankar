function higherOrder(callback) {
    console.log('invoked higher order! ');
    callback();
    console.log(' higher order continued! ');

}

function callback() {
    console.log('invoked callback! ');
}

higherOrder(callback);


