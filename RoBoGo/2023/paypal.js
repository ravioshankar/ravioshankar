/**
 * Confidential customer material.
-------------------------------

You are an engineer at a payment management company and you're trying to prevent users from accidentally making multiple payments to the same user.

Your task is to write a function that lets the user know if they attempt to perform another payment to the same user before a specific time limit.

You are given an integer time limit, a list of payments as a 2D array of [senderID, receiverID] pairs, and a sorted integer array of timestamps representing the time at which each payment was performed.

Your function should return a collection of strings, one for each payment, stating whether the payment could be an accidental payment to the same receiver or not. The string "true" represents an attempted new payment to the same user before the time limit, the string "false" represents a payment that has no issues.

Here are the details of the requirements:

- If the time difference between the current payment and the last payment made to the same receiver is strictly less than the time limit seconds, the function should return "true".
- The payments are given as a 2D array payments , where each element is a pair [senderID, receiverID].
- The corresponding timestamp for each payment is given in the timestamps array, which is sorted in ascending order.
- Use the senderID and receiverID to uniquely identify a payment.
- You need to process the payments in the order they are given in the input arrays.

Example:

timestamps_1 = [1, 4, 5, 10, 11, 14]
payments_1 = [[1, 2], [25, 65], [25, 65], [1, 2], [25,65], [1, 2]]
timelimit_1 = 5


| Time | Sender ID | Receiver ID | Time of last payment | Result |
|------|-----------|-------------|----------------------|--------|
|    1 |         1 |           2 | --                   | False  |
|    4 |        25 |          65 | --                   | False  |
|    5 |        25 |          65 | 4                    | True   |
|   10 |         1 |           2 | 1                    | False  |
|   11 |        25 |          65 | 5                    | False  |
|   14 |         1 |           2 | 10                   | True   |


Expected answer: ["false", "false", "true", "false", "false", "true"] .


More examples:

timestamps_2 = [1, 1, 1, 11]
payments_2 =  [[1,2], [1,2], [25,35], [1,2]]
timelimit_2 = 5

In this case, there are two payments from the same sender to the same receiver at the same time, so the second payment should display "true", while the others have no issues.

timestamps_3 = [1]
payments_3 =   [[1,2]]
timelimit_3 = 5

In this example, there is only one payment, so there cannot be any issues. The expected output is a collection containing a single "false".


All test cases:
validatePayments(timestamps_1, payments_1, timelimit_1) -> ["false", "false", "true", "false", "false", "true"]
validatePayments(timestamps_2, payments_2, timelimit_2) -> ["false", "true", "false", "false"]
validatePayments(timestamps_3, payments_3, timelimit_3) -> ["false"]
validatePayments(timestamps_4, payments_4, timelimit_4) -> ["false", "false", "true", "true", "false", "false"]
validatePayments(timestamps_5, payments_5, timelimit_5) -> ["false", "true", "true", "false"]



Complexity variables:
n: the number of payments
 *
 *
 */


"use strict";

function isPaymentValid(timestamps, paymentsData, timeLimit) {

  let arraySize = timestamps.length;
  /**
   * | Time | Sender ID | Receiver ID | Time of last payment | Result |
    |------|-----------|-------------|----------------------|--------|
    |    1 |         1 |           2 | --                   | False  |
    |    4 |        25 |          65 | --                   | False  |
    |    5 |        25 |          65 | 4                    | True   |
    |   10 |         1 |           2 | 1                    | False  |
    |   11 |        25 |          65 | 5                    | False  |
    |   14 |         1 |           2 | 10                   | True   |
  */
  let result = [];
  let paymentDataHash = {};
  for (let i = 0; i < arraySize; i++) {
    let key = `${paymentsData[i][0]}-${paymentsData[i][1]}`;
    if (key in paymentDataHash) {
      let timeDiff = timestamps[i] - paymentDataHash[key];
      if(timeDiff < timeLimit) {
        result.push(true);
      } else {
        result.push(false);
      }
      paymentDataHash[key] = timestamps[i];
    } else {
      paymentDataHash[key] = timestamps[i];
      result.push(false);
    }
  }

  console.log(result);

}



const timestamps_1 = [1, 4, 5, 10, 11, 14]
const payments_1 = [[1, 2], [25, 65], [25, 65], [1, 2], [25, 65], [1, 2]]
const timelimit_1 = 5
isPaymentValid(timestamps_1, payments_1, timelimit_1);

const timestamps_2 = [1, 1, 1, 11]
const payments_2 = [[1, 2], [1, 2], [25, 35], [1, 2]]
const timelimit_2 = 5

const timestamps_3 = [1]
const payments_3 = [[1, 2]]
const timelimit_3 = 5

const timestamps_4 = [23, 23, 52, 52, 180, 180]
const payments_4 = [[50, 50], [55, 90], [50, 50], [55, 90], [14, 94], [50, 50]]
const timelimit_4 = 55

const timestamps_5 = [1, 2, 5, 10]
const payments_5 = [[3, 4], [3, 4], [3, 4], [3, 4]]
const timelimit_5 = 5
