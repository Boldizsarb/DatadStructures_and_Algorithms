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

////// Tasks //////// 
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Your solution MUST have the following complexities: Time: O(N)    
function sameFrequency(num1, num2){
    if(num1 < 0 || num2 < 0 ){
        return false
    }
    else if(num1.length !== num2.length){
        return false
    }
    let strNum1 = num1.toString()
    let strNum2 = num2.toString()
    let countNum1 = {} // the object that will hold the numbers and how many times they appear
    for(let i = 0; i < strNum1.length; i++) // first num
    {
        let num = strNum1[i]
        // if the number exist, increment, otherwise set to 1
        countNum1[num] ? countNum1[num] += 1 : countNum1[num] = 1 // if the number is in the object then add 1 to the value, if not then add the number to the object and give it a value of 
        // console.log(countNum1) // to see the object 
    }
    for( let i = 0; i <strNum2.length; i++) // second num
    {
        let num = strNum2[i]
        if(!countNum1[num]){ // if the number is not in the object then its false
            return false
        } else {
            countNum1[num] -= 1 // if the number is in the object then subtract 1 from the value
        }
    }
    return true
}

//console.log(sameFrequency(182,281)) // function call

//////// Another task /////////
/* implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.    */
// Frequency Counter
function areThereDuplicates() {
    let collection = {} // storing each argument in an object
    for(let val in arguments){ // arguments is an array like object that is available inside every function
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1 // if the argument is in the object already then add 1 to the value, if not then add the argument to the object and give it a value of 1
    }
    for(let key in collection){ // loop over the object
      if(collection[key] > 1) return true // if the value is bigger than 1 then there is a duplicate
    }
    return false;
  }
/////// Multiple Pointers ///////// Same task with two pointer pattern 
  function areThereDuplicates(...args) {
    
    args.sort((a,b) => a > b); // sorting the arguments from smallest to biggest
    let start = 0; // left pointer
    let next = 1; // right pointer  these will compare adjacent values, if they are the same then there is a duplicate
    while(next < args.length){ // while the right pointer is smaller than the length of the arguments
      if(args[start] === args[next]){ // if the left pointer is the same as the right pointer then there is a duplicate
          return true
      }
      start++ // if not then move the left pointer to the right
      next++  // and the right pointer to the right
    }
    return false
  }
///////////// Another task //////////// 
/* Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.    */
function averagePair(arr, num){
    if(arr.length === 0){
        return false
    }
    let start = 0 // left pointer
    let end = arr.length - 1 // right pointer the far right of the array
    while(start < end){ // while the left pointer is smaller than the right pointer
        let avg = (arr[start]+arr[end]) / 2 // the average of the two pointers
        if(avg === num){ // if the average is the same as the number then return true
            return true
        } else if(avg < num){ // if the average is smaller than the number then move the left pointer to the right
            start++
        } else { // if the average is bigger than the number then move the right pointer to the left
            end--
        }
    }
}
//console.log("avarage pair: "+averagePair([1,3,3,5,6,7,10,12,19],8)) // function call

///////////// Another task ////////////
/* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.    */
function isSubsequence(str1, str2) {
    let i = 0; // left pointer
    let j = 0; // right pointer
    if (!str1) return true; // if there is no string then its true  as an empty string is considered a subsequence of any string
    while (j < str2.length) { // while the right pointer is smaller than the length of the second string
      if (str2[j] === str1[i]) i++; // if the letter of the second string is the same as the letter of the first string then move the left pointer to the right
      if (i === str1.length) return true; // if the left pointer is the same as the length of the first string then its true
      j++; // move the right pointer to the right
    }
    return false;
}
// the i is moving only if the letters are the same, if not then the j is moving and the loop runs again
// if i was moved to the end of the first string then its true, if not then its false!!!!!!!!!

//console.log("is subsequence: "+isSubsequence('hello', 'hello world')) // function call

///////////// Another task ////////////
/* Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array.    */
function maxSubarraySum(arr, num){
    if(num > arr.length){ // if the number is bigger than the length of the array then its false
        return null;
    }
    let max = 0; // the max is the smallest number possible
    let temp = 0; // the temp is 0

    for(let i =0; i < num; i++){ // loop over the array until the number
        max += arr[i]; // add the numbers to the max
    }
    temp = max; // the temp is the max
    for(let i = num; i < arr.length; i++){ // loop over the array starting from the number
        temp = temp - arr[i - num] + arr[i]; // subtract the number from the temp and add the next number
        max = Math.max(max, temp); // the max is the bigger number between the max and the temp
    }
    return max;
}

//////// Another task /////////
/* Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.    */

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

//////// Another task /////////
/* Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.    */

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }