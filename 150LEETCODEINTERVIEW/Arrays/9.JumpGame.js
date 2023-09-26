/**
 * 55. Jump Game
 
 * Input: nums = [2,3,1,1,4]
   Output: true
   Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 */


/**
 *  THIS QUESTION WAS DONE IN FIRST 5 MINUTE BUT IN RECURSION FROM STARTING WE HAVE ONLY ONE PROBLEM WHICH IS 
 *  DP AND BECAUSE OF THAT WE ARE GETTING TLE ERROR
 *  FINALLY DONE WITH DP IN 25 MINUTE BUT IN DP WE HAVE LOT TO LEARN 
 */

function jumpGame(arr,index,memo){
 if(index === arr.length - 1){
    return true; 
 }

 if(memo[index] === false) return false;
 let jumps = arr[index];

 for(let i = 1 ; i <= jumps ; i++){
    let res = jumpGame(arr,index+i,memo);
    memo[index + i] = false;
    if(res) return true;
 }
 return false
}
console.log(jumpGame([2,0,6,9,8,4,5,0,8,9,1,2,9,6,8,8,0,6,3,1,2,2,1,2,6,5,3,1,2,2,6,4,2,4,3,0,0,0,3,8,2,4,0,1,2,0,1,4,6,5,8,0,7,9,3,4,6,6,5,8,9,3,4,3,7,0,4,9,0,9,8,4,3,0,7,7,1,9,1,9,4,9,0,1,9,5,7,7,1,5,8,2,8,2,6,8,2,2,7,5,1,7,9,6],0,{}))