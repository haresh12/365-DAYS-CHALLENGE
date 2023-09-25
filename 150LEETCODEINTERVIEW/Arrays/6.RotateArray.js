/**
 * 189. Rotate Array
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * 
 * 
 * Input: nums = [1,2,3,4,5,6,7], k = 3
   Output: [5,6,7,1,2,3,4]
   Explanation:
   rotate 1 steps to the right: [7,1,2,3,4,5,6]
   rotate 2 steps to the right: [6,7,1,2,3,4,5]
   rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */

/**
 * https://www.youtube.com/watch?v=Z7_nMTHROZo&t=911s (NO IDEA SO LOOK INTO SOLUTIONS)
 */

/**
 *  THIS IS ENTIRLY EQUATION BASED QUESTION WHEN WE SAY WE NEED TO ROTATE ARRAY BY 3 THAT MEANS EACH ELEMENT SHOULD BE ROTATED BY THREE
 * 
 *  EX : [1,2,3,4,5,6];  K = 3
 *       [4,5,6,1,2,3] 
 *  
 *  HERE ONLY IMPORTENT THING TO UNDERSTAND IS HOW % (MODULEO) HELPING US TO ROTATE THE IMAGE 
 * 
 *   (INDEX + K)%N THIS IS THE FORMULA AND NEW INDEX OF ALL THE ELEMENTS 
 * 
 *   ANOTHER QUESTION COMES LIKE WHAT IF 3RD ELEMENT VALUE AND THEN WHEN WE REACH TO THAT INDEX ITS ALREADY MODIFIED SO HOW WE WILL
 *   HAVE ORIGNAL VALUE THERE AND FOR THAT WE ARE GOING TO TAKE TEMP ARRAY AND WILL STORE EVERYTHING THERE RATHER THEN IN ORIGNAL ARRAY      
 * 
 */


function rotateArray(arr,k){

    k = k%arr.length; // THIS MAKE SENSE AND WILL BE ALWAYS REMEMBERD MAKE SURE NOT K = ARR.LENGTH%K

   let temp = [];

   for(let i = 0 ; i < arr.length ; i++){
     temp[(i+k)%arr.length] = arr[i];  // ONLY ONE LINE CODE BUT THIS FORMULA IS HARD TO PRIDICT UNTIL YOU DON'T DO THIS QUESTION FEW TIMES
   }

   for(let i = 0 ; i < res.length ;i++){
    nums[i] = res[i];

   return arr;
}
}

rotateArray([1,2,3,4,5,6],3)


// HERE WE ARE USING EXTRA SPACE WE NEED TO DO IT WITH INPLACE