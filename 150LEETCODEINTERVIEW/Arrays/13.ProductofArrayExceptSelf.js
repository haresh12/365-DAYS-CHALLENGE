/**
 * 238. Product of Array Except Self
 * 
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
   The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
   You must write an algorithm that runs in O(n) time and without using the division operation. (MUST UNDERSTAND THIS)

   Input: nums = [1,2,3,4]
   Output: [24,12,8,6]
 */

/**
 *  This questopm is trickier then we thing if you understand it then all will make sense
 *  [1,2,3,4,5,6] suppose in case you want to find value for three then you need multipication of its left side
 *  values like 1*2 and multipication of its right side value which is 4*5*6 this means you need prefix value from the 
 *  left side and postfix values from the right side
 */


function productOfArrayExpectItSelf(arr){
 
  // Lets first find product of prefix value 
  let product = 1;
  let prefix = [];

  for(let i = 0 ; i < arr.length ; i++){
     prefix[i] = product;
     product = product*arr[i];
  }

  // Lets now find postfix values
  product = 1; // Reseting the product to default value 1 
  let postfix = [];
  for(let i = arr.length - 1; i >= 0 ; i--){
      postfix[i] = product;
      product = product*arr[i];
  }

  // AT this time we have prifix and postfix both value now only thing is left is we can just do multification of there indexes
  let output = [];
  for(let i = 0 ; i < arr.length ; i++){
    output[i] = prefix[i] * postfix[i];
  }
  return output;
}

console.log(productOfArrayExpectItSelf([1,2,3,4]));


/**
 *  HERE FOR NOW WE ARE USING PREFIX AND POSTFIX VALUES ARR AND THATS WHY SPACE IS O(N) IN NEXT WEEK TEST TRY TO REMOVE THIS SPACE ALSO
 *  */