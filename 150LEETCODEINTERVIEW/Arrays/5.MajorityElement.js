/**
 * 169. Majority Element
 * Given an array nums of size n, return the majority element.
   The majority element is the element that appears more than ⌊n / 2⌋ times. 
   You may assume that the majority element always exists in the array.  
    Example 1:
    Input: nums = [3,2,3]
    Output: 3
    Example 2:
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2
 */

// https://www.youtube.com/watch?v=X0G5jEcvroo&t=882s   (Moore's Voting Algorithm)
/**
 *  THIS IS SPECIFIC ALGORITHM RELATED QUESTION SO LET'S DIRECTLY LEARN THAT
 */

// LETS FIRST TRY WITH BRUTE FORCE SOLUTION O(N2) TIME COMPLEXITY worked
function majorityElement(arr){
let max = Number.MIN_SAFE_INTEGER;
let val ;
for(let i = 0 ; i < arr.length ; i++){
  let total = 0;
 for(let j = 0 ; j < arr.length ; j++){
   if(arr[i] === arr[j]){
      total++;
   }
 }
 if(total > max){
    max = total;
    val = arr[i]
 }
}
return val
}
majorityElement([2,2,1,1,1,2,2,1,1,1,1,1,1,1,1])

/**
 *  WE CAN ALSO YOU MAP AND STORE VALUES THERE WITH COUNT IN THAT O(N) TIME AND AND O(N) SPACE 
 *  WE CAN ALSO SORT THE ARRAY FIRST NOW ARRAY IS SORTED SO WE CAN EAISLY COUNT THE NUMBER ONE BY ONE O(nlogn) as we are sorting array
 */

/**
 *  See in moore voting algorigtm we need to say each element has chance to be a majority element in that case we will first give
 *  opportunity to first element and will make its frequency 1 now we see same number after that then we will increase the frequency
 *  else we  will decrease the frequency and if frequency reaches to 0 then we will give current element opportunity to be the 
 *  majority element.
 * 
 *  IN THIS ALGO AT THE THE MAJORITY ELEMENT FREQUENCY WILL BE GRATER THEN 0 ALWAYS
 */


// THIS IS EASIEST ALGORIGHTM BUT MOST OF TIME WE FORGOT 
function majorityElementOp(arr){

let curr = arr[0];
let freq = 1;

for(let i = 1 ; i < arr.length ; i++){
   if(curr === arr[i]){
      freq++;
   }else{
    freq--;
   }

   if(freq === 0){
      curr = arr[i];
      freq = 1;
   }
}
return curr
}

console.log(majorityElementOp([2,2,1,1,1,2,2,1,1,1,1,1,1,1,1]))