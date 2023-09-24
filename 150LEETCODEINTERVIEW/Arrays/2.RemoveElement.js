/**
 * 27. Remove Element
 * 
 * Input: nums = [3,2,2,3], val = 3
   Output: 2, nums = [2,2,_,_]
   Explanation: Your function should return k = 2, with the first two elements of nums being 2.
   It does not matter what you leave beyond the returned k (hence they are underscores).
 */


   // NOT 100% understanding but i was able to do it with partition concept learn more about it from Pepcoding playlist
   function removeDuplicate(arr,val){
    let i = 0;
    let j = 0; 
    let total = 0;
    while(i < arr.length){
        if(arr[i] !== val){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j++;
            total++; // IT SHOULD BE IN IF NOT IN ELSE BECAUSE YOU NEED TO RETURN HOW MANY ELEMENTS LEFT AFTER REMOVING ALL val VALUES  
        }else{
            i++;
        }
    }
     return arr
   }

   console.log(removeDuplicate([0,1,2,2,3,0,4,2],2))