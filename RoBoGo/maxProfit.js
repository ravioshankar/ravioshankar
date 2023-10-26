/** Best Time to Buy and Sell Stock II
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {



  let maxProfit = 0;

  const arryLength = prices.length;


    for (let i =  0; i < arryLength; i++) {

      const currentSale = prices[i];
      const currentBuy = prices[i-1];
      if (currentSale - currentBuy > 0) {
        maxProfit += currentSale - currentBuy;

      }

    }




  return maxProfit;
};





console.log('Max profit is ', maxProfit([7, 1, 5, 3, 6, 4]));
