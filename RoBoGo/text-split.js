// const input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem_ipsum_dolor_sit_amet,_consectetur-adipiscing_elit,_sed_do eiusmod tempor incididunt `

const input = `Excepteur sint_occaecat_cupidatat_non_proident,_sunt_in_culpa_qui_this is long text label`

function splitText(input){
let result = []
    const is = input.split(" ");
    const txtLen = is.length

    is.reduce((accumelator, currentValue, idx) => {

        if(currentValue.length > 30){
            const len = accumelator.length;

            accumelator = accumelator + " " + currentValue.substring(0, 30-len);
            result.push(accumelator.trim());
            accumelator = currentValue.substring(30-len);
            while(accumelator.length > 30) {
                result.push(accumelator.substring(0, 30).trim())
                accumelator = accumelator.substring(30);

            }
            if(idx === txtLen - 1) {
            result.push(accumelator);
            }
                return accumelator;


        }



    if(accumelator.length > 30 ){
    console.log("accumelator -", accumelator)
    result.push(accumelator.trim());
    accumelator = '';
    }

    if(idx === is.length - 1) {
        result.push(accumelator+ " " + currentValue);
    }
        return accumelator+ " " + currentValue;
    }, '')

    console.log(" Result ", result);

}







// splitText(input)
splitText("thisislong_text_without_any_breaks_this_is_how_it_you_are_happy_kido_yay and")

