/**
 *   45. Jump Game II
 *   Input: nums = [2,3,1,1,4]
     Output: 2
     Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, 
     then 3 steps to the last index.
 */

/**
 *  THE ONLY DIFFERENCE BETWEEN JUMP GAME I AND II IS IN JUMP GAME II WE HAVE TO FIND ALL THE POSSIBLE PATH TO REACH AT
 *  DESTINATION AND THEN FROM THOSE PATH WE NEED TO FIND THE MINIMUM ONE
 */

/**
 *  DONE WITHOUT DP IN 10 MIN BUT WITH DP NO SOLUTION
 */

// DO WHEN YOU LEARN DP
 function jumpGameII(arr, index, memo, curr, min) {
    if (index >= arr.length - 1) {
        return curr;
    }

    // Check if the result for the current index is already memoized
    if (memo[index] !== undefined) {
        return memo[index];
    }

    let jumps = arr[index];
    let minJumps = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= jumps; i++) {
            minJumps = Math.min(minJumps, jumpGameII(arr, index + i, memo, curr + 1, min));
            memo[index+i] = minJumps;

    }
    memo[index] = minJumps;

    // Memoize the result for the current index
 
    return minJumps;
}

console.log(jumpGameII([1, 2, 1, 1, 1], 0, {}, 0, Number.MAX_SAFE_INTEGER)); // Output: 3

