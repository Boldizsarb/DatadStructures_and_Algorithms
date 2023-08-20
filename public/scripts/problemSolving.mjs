console.log("Going down!");

/*
function charCount(str){
    let result = {};
    // count each character in the string and return each with the count
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
    // loop over the string, for each character...
    for (let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){// if char is something else (space, period, etc.) don't do anything
            // the alpha numerical 
            if(result[char] > 0){ // means it's already there
                //  if the char is a number/letter AND is a key in object, add one to count
                result[char]++;
            }else{ // if the char is a number/letter AND not in object, add it and set value to 1
                result[char] = 1;
            }
        }
    }
    return result;            
                
    // return object at end
}
console.log(charCount("Hi there!"));
*/
function charCount(str){
    let result = {};
    for (let char of str){ // for of loop much ea  sier to read
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){// if char is something else (space, period, etc.) don't do anything
            // the alpha numerical 
            if(result[char] > 0){ // means it's already there
                //  if the char is a number/letter AND is a key in object, add one to count
                result[char]++;
            }else{ // if the char is a number/letter AND not in object, add it and set value to 1
                result[char] = 1;
            }
        }
    }
    return result;            
    // return object at end
}
console.log(charCount("Hi there!"));