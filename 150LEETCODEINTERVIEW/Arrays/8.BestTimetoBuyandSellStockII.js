/**
 *  Best Time to Buy and Sell Stock II
    
    Input: prices = [7,1,5,3,6,4]
    Output: 7
    Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
    Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
    Total profit is 4 + 3 = 7.
 */

/**
 *  This question is trickier then we thing also when its come to code it look much simpler then even easy question but 
 *  importent thing is how its working (https://www.youtube.com/watch?v=Q7v239y-Tik)
 */


// Only thing we are doing is checking if current values is greater then past if that is the case then we can sell 
// in current price and bought in prev price
function bestTimeToBuyII(arr){
    let profit = 0;
    for(let i = 1 ; i < arr.length ; i++){
       if(arr[i] - arr[i-1] > 0){
          profit+= arr[i] - arr[i-1];
       } 
    }
  return profit;  
}

console.log(bestTimeToBuyII([7,1,5,3,6,4]))