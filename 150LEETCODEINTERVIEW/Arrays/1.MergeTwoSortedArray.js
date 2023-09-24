/**
 * 88. Merge Sorted Array
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of 
 * elements in nums1 and nums2 respectively.
 * 
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.

   The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
   To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
   and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

// DONE IN 20 MIN 
// IMPORTENT THING mIndex >= 0 nIndex >= 0 IF YOU UNDERSTAND THIS TWO CONIDTION YOU UNDERSTAND THIS
// ALSO MOST COFUSING THING WHY WE NEED TO START FROM BACK ITS INCREDIBLE ONCE YOU UNDERSTAND IT
function mergeTwoSortedArray(nums1,nums2,m,n){
 if(m === 0 && n === 0) return [];
 if(n === 0) return nums1;

 let tIndex = m + n -1;
 let nIndex = n - 1;
 let mIndex = m - 1;
 while(tIndex >= 0){
    if(mIndex >= 0 && nums1[mIndex] >= nums2[nIndex]){
       nums1[tIndex] = nums1[mIndex];
       mIndex--;
    }else if(nIndex >= 0){
        nums1[tIndex] = nums2[nIndex];
        nIndex--;
    }
    tIndex--;
 }
 return nums1;
}

console.log(mergeTwoSortedArray([1,2,3,0,0,0],[2,5,6],3,3))