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


/////// Multiple Pointers Pattern //////////////
/* Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist   */
function sumZero(arr){ // two pointers 
    let left = 0; // on starts at left, index 0
    let right = arr.length - 1; // the other at the last index of the array ergo the right 
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){ // if the sum of those two numbers are zero then if was found 
            return [arr[left], arr[right]];
        } else if(sum > 0){ // if the sum is bigger than 0 then 
            right--; // deducting one from the right ergo mooves one from the right to the left so from the 10 to the 3
        } else { // the loop runs again and the left did not move yet, now the sum will be -1 (-4,3) so left++ adds an index to the left and it jumps to the -3 from the -4, and the loop runs again. 
            left++;
        }
    }
}
//sumZero([-4,-3,-2,-1,0,1,2,3,10]) // function call
// Time Complexity - O(N)
// Space Complexity - O(1)

/////// Count Unique Values //////////////
/* Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.    */



function countUniqueValues(arr){
    if(arr.length === 0) return 0; // if the array is empty then return 0
    let i = 0; // left pointer , j is the right pointer
    for(let j = 1; j < arr.length; j++){ // j is always one ahead of i
        if(arr[i] !== arr[j]){ // if they are not the same then move the left pointer and change the value of the index to the right pointer
            i++;
            arr[i] = arr[j]; // moving the indexes to the right, but i only gets moved when the values are not the same, hence the index of the i will be the number that is unique!!  If the numbers are the same the loop just keeps going until it finds a different number!! 
        }
        console.log("i:"+i," j: "+ j); // too look at the indexes 
    }
    return i + 1; // i starts at 0 so to get the right number we add 1 since there is always at least one unique value
}

/* process: 
            i 
    [1,1,2,3,3,4,5,6,6,7]
                    j
*/ 
// it is linier time complexity O(n) since we only looping once and constant space complexity O(1)
// countUniqueValues([1,1,1,2,2,3,4,5,5,5,6,7]) // function call

/////// Sliding Window Pattern ///////////////////////////////////////////
