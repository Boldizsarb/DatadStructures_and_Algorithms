console.log("hash_tables")

function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31; // prime number helps reduce collisions ALWAYS USE PRIME NUMBERS
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}


class HashTable {
    constructor(size = 4){ // prime number helps reduce collisions ALWAYS USE PRIME NUMBERS
      this.keyMap = new Array(size); // array of arrays so we can store multiple values at the same index
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){ // if there is nothing at this index
            this.keyMap[index] = []; // create an empty array
        }
        this.keyMap[index].push([key, value]); // push the key and value into the array
    }
    get(key){
        let index = this._hash(key); // get the index
        if(this.keyMap[index]){ // if there is something at this index
            for(let i = 0; i < this.keyMap[index].length; i++){ // loop through the array at that index
                if(this.keyMap[index][i][0] === key){ // if the key is equal to the key passed in, the sub array at index i
                    return this.keyMap[index][i][1]; // return the corresponding value not the entire sub array
                }
            }
        }
        return undefined; // if the key is not found return undefined
    }
    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){ // loop through the keyMap
            if(this.keyMap[i]){ // if there is something at this index
                for(let j = 0; j < this.keyMap[i].length; j++){ // loop through the sub array
                    if(!keysArr.includes(this.keyMap[i][j][0])){ // if the key is not already in the keys array
                        keysArr.push(this.keyMap[i][j][0]); // push the key into the keys array
                    }
                }
            }
        }
        return keysArr;
    }
    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){ // loop through the keyMap
            if(this.keyMap[i]){ // if there is something at this index
                for(let j = 0; j < this.keyMap[i].length; j++){ // loop through the sub array
                    if(!valuesArr.includes(this.keyMap[i][j][1])){ // if the value is not already in the values array
                        valuesArr.push(this.keyMap[i][j][1]); // push the value into the values array
                    } // it will return duplicates if the value is the same but the key is different
                }
            }
        }
        return valuesArr;
    }
     
  }
let ht = new HashTable();
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
console.log(ht.keyMap)
console.log(ht.get("maroon"))
