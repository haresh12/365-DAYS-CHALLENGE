/**
 *  80. Remove Duplicates from Sorted Array II 
 * 
   Input: nums = [1,1,1,2,2,3]
   Output: 5, nums = [1,1,2,2,3,_]
   Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
   It does not matter what you leave beyond the returned k (hence they are underscores).

   Input: nums = [0,0,1,1,1,1,2,3,3]
   Output: 7, nums = [0,0,1,1,2,3,3,_,_]
   Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
   It does not matter what you leave beyond the returned k (hence they are underscores).
 */


function removeDuplicateII(arr){
 
    let isSecondItem = false;
    let curr = arr[0];
    let nextElementIndex = 1;

    for(let i = 1 ; i < arr.length ; i++){
       if(curr === arr[i] && isSecondItem === false){
        arr[nextElementIndex] = arr[i]; // THIS LINE IS HEART OF THE PROGRAM WHEN WE HAVE 3 3 AT LAST CHECK WITH THAT SCENARIO
        nextElementIndex++;
        isSecondItem = true;
       }else if(curr === arr[i]){
         continue;
       }else{
         arr[nextElementIndex] = arr[i];
         nextElementIndex++;
         curr = arr[i];
         isSecondItem = false;
       }
    }
  return nextElementIndex;  
}

console.log(removeDuplicateII([1,1,1,2,2,3]))