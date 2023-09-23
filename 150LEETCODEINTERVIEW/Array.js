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
     if(this.length === 0) {
        this.data[this.length] = val;
        this.length++;
        return val
     }else{
        this.length++;
        for(let i = 0 ; i < this.length ; i++){
            this.data[i] = this.data[i+1];
        }
        this.data[0] = val;
        return val;
     }
    }
}


const arr = new MyArray();
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.get(0));
console.log(arr.get(1));
console.log(arr.get(2));
console.log(arr.get(3));
console.log(arr.get(4));
arr.unshift(1);
arr.unshift(2);
// arr.unshift(3);
// arr.unshift(4);
// arr.unshift(5);
// arr.unshift(6);
// arr.unshift(7);

console.log(arr)
