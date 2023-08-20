console.log("Going down!");

// frequency counter pattern///////////////////////
/*Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.    */
function same(arr1, arr2){
    if(arr1.length !== arr2.length){ // if the length of the arrays are not the same then it is false
        return false;
    }
    for(let i = 0; i < arr1.length; i++){  // loop over the first array
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // indexOf is a loop inside a loop
        // trying to find which index of the second array is equal to the first array squared
        if(correctIndex === -1) { // if the index is not found then it is false
            return false;
        }
        console.log(arr2) // this is to see the array shrinking 
        arr2.splice(correctIndex,1) // if the index is found then remove it from the second array
    }
    return true
}

//console.log("first "+same([1,2,3,2], [9,1,4,4]))  // function call
//console.log("second "+same([1,2,3,2,2], [9,1,4,4,6]))

/// same code reforged with frequency counter pattern
function sameR(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){ //  we end up with just this little object that tells us how many times each thing, each element occurs in that list.
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log(frequencyCounter1)// it also shows how many times the number ocours
    console.log(frequencyCounter2)// and instead of removing a number as previously we just subtract 1 from the value that was given to the key
    return true
}
// console.log("first refoctored: "+sameR([1,2,3,2], [9,1,4,4])) // function call

//// Anagram challenge ////////////// 
/* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.    */

function validAnagram(str1,str2){
    if(str1.length !== str2.length){ // if its not the same length then its not an anagram
        return false
    }
    const lookup = {};
    for(let i = 0; i < str1.length; i++){ // creates an object that breaks down the string into letters and counts how many times each letter appears
        let letter = str1[i]
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
        console.log(lookup)
    }
    for(let i = 0; i < str2.length; i++){
        let letter = str2[i]
        if(!lookup[letter]){ // if the letter is not in the object then its not an anagram, ie: if there is another letter, or if the letter is not in the object, {a: 0, n: 0, g: 0, r: 0, m: 0} it can not go any lower than 0 due to the if statement(lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1)
            return false
        } else { // if the letter is in the object then subtract 1 from the value
            // {a: 3, n: 1, g: 1, r: 1, m: 1} the value of a is 3 so it will be 2
            lookup[letter] -= 1
        }
        console.log(lookup)
    }
    return true
}
console.log("Anagram: "+validAnagram('anagram', 'nagaram'))
