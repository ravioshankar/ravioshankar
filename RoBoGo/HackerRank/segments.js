
'use strict';
/**
 * Instructions

Given an input string of arbitrary length, output SMS-compliant segments with suffixes.

A SMS-compliant segment is of length 160 characters or less.
Do not generate segments if the input fits in a single message.
A segment suffix looks like "(1/5)" for the first of five segments.
The segment content and suffix must both fit in the segment.
You must complete the function/method stub to return an array of message segments.

Input Constraints

Inputs will only consist of A-Z, a-z, spaces ( ), commas (,) and periods (.)
Your implementation can expect a maximum of 9 segments per input.

Extra Credit Case

The third test case has an additional output constraint: do not split words between segments! You should be able to iterate on your existing implementation.

Words will be delimited by a single space. Do not split on any other punctuation. You do not need to account for "unbreakable" i.e extremely long words in the input.
Spaces between words should be preserved in the first segment unless that violates the SMS length constraint, in which case the space should be included in the next segment.
For example, given the following text:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat nec dui quis maximus. Praesent vehicula feugiat condimentum. Nunc porta vulputate elit sit amet lacinia. Vivamus volutpat accumsan consequat. Nulla mattis odio erat, vel convallis neque semper nec. Integer a pharetra purus

The segment break would fall between "porta" and "volputate" with the space fitting in the first segment. The output would be:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat nec dui quis maximus. Praesent vehicula feugiat condimentum. Nunc porta (1/2)
vulputate elit sit amet lacinia. Vivamus volutpat accumsan consequat. Nulla mattis odio erat, vel convallis neque semper nec. Integer a pharetra purus.(2/2)

However, if the text is modified slightly as follows:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat nec dui quis maximus. Praesent vehicula feugiat condimentum. Nunc portamludimi vulputate elit sit amet lacinia. Vivamus volutpat accumsan consequat. Nulla mattis odio erat, vel convallis neque semper nec. Integer a pharetra purus

Then the space should be placed in the beginning of the second segment:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat nec dui quis maximus. Praesent vehicula feugiat condimentum. Nunc portamludimi(1/2)
 vulputate elit sit amet lacinia. Vivamus volutpat accumsan consequat. Nulla mattis odio erat, vel convallis neque semper nec. Integer a pharetra purus.(2/2)

Sample Test Case

Sample Input

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis partu sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore ver rup. Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa.

Sample Output

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis partu (1/3) sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore ver (2/3) rup. Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa.(3/3)
 */


function segments(message) {

    const max_sms_length = 160;
    //base case
    if(max_sms_length> message.length){
        return message
    }
    const message_words = message.split(" ");
    let current_message = '';
    let current_message_count = 1;

    let total_split_messages = {};


    for(let i of message_words) {
        if(`${current_message}`.length > 154 ){
            total_split_messages[current_message_count] = current_message;
            current_message_count += 1;
            current_message = `${i} `;

        } else {
            current_message += `${i} `;
        }
    }
    total_split_messages[current_message_count] = current_message;

    console.log("total_split_messages ", total_split_messages);
    let str = ''
    let  final_processed_message = [];
    for(let j in total_split_messages){
        const v = total_split_messages[j] + `(${j}/${current_message_count})`;
        final_processed_message.push(v);
        str += v;
    }

    console.log(final_processed_message)
    console.log(str)
}



const sampleTxt = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis partu sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore ver rup. Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa.";

segments(sampleTxt);


// ---- fully working -------------



/*
 * Complete the 'segments' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING message as parameter.
 */

function segments_fully_working(message) {

// base case

if(message.length <= 160){
    
    return [message];
}
// message size larger than 160 char

const total_words = message.split(" ");
const sms_splits = {};
let sms = '';
let total_chars = 0;
let current_segment = 0;
const total_segments = Math.round(message.length / 154)


for(let word of total_words){
    if((sms.length + word.length + 5)  <= 160){
        sms += `${word} `;
    } else {
        current_segment = current_segment+1;
        if(sms.length > 155){
            sms_splits[current_segment] = sms.trimEnd() + `(${current_segment}/${total_segments})`;
              sms = ` ${word} `;
        } else {
                sms_splits[current_segment] = sms + `(${current_segment}/${total_segments})`;
              sms = `${word} `;
        }

      
    }
}
sms_splits[current_segment+1] = sms.trimEnd() + `(${current_segment+1}/${total_segments})`;
console.log("sms splits", sms_splits);

return Object.values(sms_splits);
}