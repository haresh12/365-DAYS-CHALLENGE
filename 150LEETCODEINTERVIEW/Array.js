/**
 *  DAY 1 : OUR CHALLANGE IS TO CRATE ARRAY IN JAVASCRIPT WHERE YOU HAVE TO CREATE KNOWN METHODS OF ARRAY
 */

/**
 *  Array in javascript is object with intege index based key
 */
class MyArray {
  
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(val){
     this.data[this.length] = val;
     this.length++;
     return val;
    }

    /**
     * this.length -1 not this.length (if you know why you understand array)
     * after delete make sure to decress the length
     */
    pop(){
      if(this.length <= 0) return -1;
      const item = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length--;
      return item
    }

    get(index){
      if(index > this.length) return undefined;
      return this.data[index];  // here we need to add index not this.length
    }
  
   // add at first position
    unshift(val){
    if(this.length === 0){
      this.data[this.length] = val;
      this.length++;
    }else{
      let total = this.length;
      for(let i = total - 1; i >= 0 ; i--){
        this.data[i+1] = this.data[i];
      }
      this.data[0] = val;
      this.length++;
    }
    return val
    }

    // remove from first position
    shift(){
     if(this.length === 1){
      let first = this.data[0];
      delete this.data[0];
      this.length--;
      return first
     }else{
      let total = this.length;
      let first = this.data[0];
      for(let i = 0 ; i < total ; i++){
        this.data[i] = this.data[i+1];
      }
      delete this.data[this.length-1];
      this.length--;
      return first
     }
    }

    /**
     * if tries to insert at first position the use unshift
     * if tries to insert at last position then use push
     * INSERTAT ==== UNSHIFT
     */
    insertAt(val,index){

     if(index === 0){
    return  this.unshift(val);
     }else if(index >= this.length){
     return this.push(val);
     }else{
      // THIS IS SAME AS unshift just rather then 0 we need to use index provided in params
      let total = this.length;
      for(let i = total - 1; i >= index ; i--){
        this.data[i+1] = this.data[i];
      }
      this.data[index] = val;
      this.length++;
      return val
     }
    }

    /**
     * if deleting from 0 position then use shift() method
     * if deleting from last postion then use pop() method
     * DELETEAT ===== SHIFT
     */
    deleteAt(index){
      if(index >= this.length) return 'Not valid index'
      if(index === 0){
        return this.shift();
      }else if(index === this.length-1){
        return this.pop()
      }else{
        let total = this.length;
        let deleted = this.data[index];
        for(let i = index ; i < total ; i++){
          this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
        return deleted
      }
    }
}


const arr = new MyArray();
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.get(0));
// console.log(arr.get(1));
// console.log(arr.get(2));
// console.log(arr.get(3));
// console.log(arr.get(4));
// arr.unshift(1);
// arr.unshift(2);
// arr.unshift(3);
// arr.unshift(4);
// arr.unshift(5);
// arr.unshift(6);
// arr.shift();
// arr.shift();
// arr.shift();
// arr.shift();
// arr.shift();
// arr.shift();
// arr.insertAt(100,0)
// arr.insertAt(101,6)
// arr.insertAt(111,3)
arr.deleteAt(0)
arr.deleteAt(3)
arr.deleteAt(1)
console.log(arr)
