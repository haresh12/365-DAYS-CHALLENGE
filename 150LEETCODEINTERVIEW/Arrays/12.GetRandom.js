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
      if(val in this.map) return false;
      else {
        this.list.push(val);
        this.map[val] = this.list.length-1; // in this index current value will be stored
        return true
      }
     }

     remove(val){
      if(val in this.map) {
        this.list[this.map[val]] = this.list[this.list.length-1];
        this.map[this.list[this.list.length-1]] = this.map[val];
        delete this.map[val]; // THIS IS ALSO MUST NEEDED IF YOU UNDERSTAND THIS YOU UNDERSTAND LIFE
        this.list.pop()
        return true;
      }else{
        return false;
      }
     }

     getRandom(){
      //MAKE SURE HERE WE DON'T NEED TO RETURN INDEX WE NEED TO RETURN VALUE SO DON' DO
      // Math.floor(Math.random()*this.list.length) THIS
      // RATHER DO THIS this.list[Math.floor(Math.random()*this.list.length)]
      return this.list[Math.floor(Math.random()*this.list.length)]
     }
   }

   const set = new RandomizedSet();
   set.insert(1);
   set.remove(2);
   set.insert(2);
   set.getRandom();
   console.log(set.remove(1));
   console.log(set.map)
   console.log(set.list)
   console.log(set.getRandom())

  