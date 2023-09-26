/**
 *  121. Best Time to Buy and Sell Stock
 * 
 *  Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */


function bestTimeToBuy(arr){
    let bought = arr[0];
    let max =  0; // KEEP THIS ZERO NOT NUMBER.MIN BECAUSE [7,6,4,3,1] THERE WILL BE CHANCE WHEN WE DON'T MAKE PROFIT SO
    // AT THAT TIME WE NEED TO RETURN 0

    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] -  bought < 0){
            bought = arr[i];
        }else if(arr[i] - bought > max){
            max = arr[i] - bought;
        }
    }
    return max;
}

console.log(bestTimeToBuy([7,6,4,3,1]))