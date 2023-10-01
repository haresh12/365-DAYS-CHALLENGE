/**
 * 134. Gas Station
 * 
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
   You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
   Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

// POSITIVE CASE
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

// NEGITIVE CASE
Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
 */

/**
 *  In this question one of the most importent thing is from where to start see in first example it self if we would have
 *  start from index 4 then we won't be able to complete the  full circle now if you see inital if you start from index 3
 *  where we have value 4 and cost is 1 so different is like 3 and same if you have started from index 4 where value is 
 *  5 and cost is 2 so here also we have value 3 left but still as we move forward if we start with index 4 then we won't
 *  be able to complete 
 */

/**
 * https://www.youtube.com/watch?v=lJwbPZGo05A
 *  THIS PROBLEM IS IMPOSSIBLE TO GUSSE AS EXPLAINED IN VIDEO ALSO AND THE SOLUTION IS THE SHORTEST ONE TILL NOW IN ALL THE PROBLEMS
 *  BUT THIS PROBLEM IS NOT INTUTIVE AT ALL SO DO IT AS MANY TIME AS YOU CAN 
 */


function canReachToEnd(gas,cost){
 /**
  *  SEE IN QUESTION THEY SAID THAT IF THERE WILL BE THE OUTPUT THEN ONLY ONE UNIQUE OUTPUT WILL BE THERE SO WE WILL DO SOMETHING
  *  ABOUT IT BUT IF YOU THING LOGICALLY THEN THE AND MOST IMPORTENT CONDITION WOULD BE GAS STATIONS TOTAL SHOULD BE GREATER OR
  *  EQUAL TO THE COST ARRAY BECAUSE IF COST ARRAY IS HIGHER THEN WE HAVE PROBLEM AND THIS IS THE PLACE WHERE WE ARE SURE THAT 
  *  WE NEED TO RETURN -1 BECAUSE COST IS HIGHER THEN GAS.
  */

  let totalGas = 0;
  let totalCost = 0;
  for(let i = 0 ; i < gas.length ; i++){
    totalGas+=gas[i]
    totalCost+=cost[i];
  }

  if(totalCost > totalGas) return -1; // means there won't be any solution possible

  // IF YOU COME HERE MEANS THERE WILL BE 1 UNIQUE SOLUTION FOR SURE NOW NEXT WHATEVER CODE WE ARE GOING TO WRITE ITS JUST
  // THAT WE GET IDEA ONLY AFTER WATHCHING ABOVE VIDEO

  let total = 0;
  let resIndex = 0;

  for(let i  = 0 ; i < gas.length ; i++){
    total+= (gas[i] - cost[i]);

    // see in any case if total goes minus then that index won't be possible for our answer so we will give chance to next index
    // this approach is known as greedy approach where you thing that this code be the answer but if that is not then you try for
    // the next index;

    if(total < 0){
        total = 0;
        resIndex= i+1;
    }
  }

  return resIndex;
}
let gas = [1,2,3,4,5], cost = [3,4,5,1,2]

console.log(canReachToEnd(gas,cost))




// TRY AGAIN WITH CODE

function canReachToEndTry(gas,cost){
 let totalGas = 0 , totalCost = 0;
 for(let i = 0; i < gas.length ; i++){
    totalCost+= cost[i]
    totalGas+=gas[i];
 }
 if(totalCost > totalGas) return -1;
 let total = 0;
 let res = 0;
 for(let i = 0 ; i < gas.length ; i++){
    total+=(gas[i] - cost[i]);
    if(total < 0){
        total = 0;
        res= i + 1;
    }
    return res;
 }
}