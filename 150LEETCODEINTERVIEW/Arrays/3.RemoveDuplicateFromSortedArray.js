/**
 * Remove Duplicates from Sorted Array
 * 
 * Input: nums = [1,1,2]
   Output: 2, nums = [1,2,_]
   Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
   It does not matter what you leave beyond the returned k (hence they are underscores).
 */


/**
 *  Here array is sorted and we really don't need to perform any delete operation its just that we need all unique one first
 *  UNDERSTAND THIS BECAUSE IT LOOKS EASY BUT COMING IDEA IN MIND TAKING TIME
 */
function removeDuplicateFromSortedArray(arr){
 let index = 1;  
 let curr = arr[0]; 
 for(let i = 1 ; i < arr.length ; i++){
   if(curr !== arr[i]){
      arr[index] = arr[i];
      curr = arr[i];
      index++;
   }
 }
 return index
}

console.log(removeDuplicateFromSortedArray([1,1,2,3,3]))