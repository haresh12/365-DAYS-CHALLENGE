/**
 * 135. Candy
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
   You are giving candies to these children subjected to the following requirements:

      Each child must have at least one candy.
      Children with a higher rating get more candies than their neighbors.
 Return the minimum number of candies you need to have to distribute the candies to the children.


Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.

 */

//https://www.youtube.com/watch?v=h6_lIwZYHQw&t=761s THIS IS HARD TYPE OF PROBLEM BUT BEST EXPLAINED IN THIS VIDEO

function minimumCandyRequired(arr){

  let left = Array(arr.length).fill(1);  // THIS ARR.FILL MAKE MORE SENSE JUST GIVE 1 TO EACH AND EVERY ITEM BECAUSE ALL SHOULD HAVE MINIMUM 1 CANDY
  for(let i = 1; i < arr.length ; i++){
    if(arr[i-1] > arr[i]){
        left[i-1]+=1;
    }
  } 
  
  let right = Array(arr.length).fill(1); // THIS ARR.FILL MAKE MORE SENSE JUST GIVE 1 TO EACH AND EVERY ITEM BECAUSE ALL SHOULD HAVE MINIMUM 1 CANDY
  for(let i = arr.length - 2 ; i >= 0 ; i--){
    if(arr[i+1] > arr[i]){ // COMPARITION ALWAYS WILL HAPPENS BETWEEN ARRAY ITEMS NOT LIKE RIGHT[I+1] > ARR[I]; I MAD THIS MISTAKE IN BOTH LEFT AND RIGHT ARRAY
        right[i+1]+=1;
    }
  }

  // NOW LAST STEP IS JUST TO FIND MAX VALUE FROM LEFT AND RIGHT AND THAT WILL BE THE OUTPUT

  let total = 0;
  for(let i = 0 ; i < left.length ; i++){
    total+=Math.max(left[i],right[i]);
  }

  console.log(right)
  return total;
}

console.log(minimumCandyRequired([1,2,87,87,87,2,1]))