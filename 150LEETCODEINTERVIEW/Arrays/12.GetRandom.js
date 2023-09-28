/**
 * 380. Insert Delete GetRandom O(1)
 * 
 * RandomizedSet() Initializes the RandomizedSet object.
   bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
   bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
   int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
   You must implement the functions of the class such that each function works in average O(1) time complexity.
 */

   class RandomizedSet {

    constructor(){
     this.map = {};
     this.list = []; 
    }
    
    insert(val){
     if(val in this.map){
      return false;
     } 
     this.map[val] = this.list.length;
     this.list.push(val);
     return true;
    }
  
    remove(val){
     if(val in this.map){
       let indexInArr = this.map[val];
       let lastIndex = this.list.length-1;
       this.swapVal(indexInArr,lastIndex);
       this.map[this.list[indexInArr]] = indexInArr; // THIS IS THE LINE THAT HAS PROBABILITY OF MISTAKES 
       this.list.pop(); // MAKE SURE THIS LINE IS AFTER ABOVE LINE
       delete this.map[val];
       return true;
     } 
     return false;
    }
  
    swapVal(indexInArr,lastIndex){
      console.log(indexInArr,lastIndex)
      let temp = this.list[indexInArr];
      this.list[indexInArr] = this.list[lastIndex];
      this.list[lastIndex] = temp;
    }
  
     getRandom(){
       let randomIndex =  Math.floor(Math.random()*this.list.length); // because it may return 0 value also in that case we will return 0 index value
       return this.list[randomIndex]
     }
   }
  
  
  
  