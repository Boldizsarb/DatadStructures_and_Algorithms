console.log("Recursion");

function factorial(num) { // iterative
  let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

function factorial(num) { // recursive
    if (num === 1) return 1;  // base case 
    return num * factorial(num - 1);
}

///// Helper Method Recursion /////
function collectOddValues(arr){
    
    let result = []; // if the array was inside the recursive function, it would be reset every time the function is called

    function helper(helperInput){ // recursive function
        if(helperInput.length === 0) { // base case
            return;  // if the array is empty 
        }
        
        if(helperInput[0] % 2 !== 0){ // check if the first element is odd
            result.push(helperInput[0]) // if it is, push it to the result array
        }
        
        helper(helperInput.slice(1)) // call the function again with the array minus the first element
        // this will keep calling the function until the array is empty, it is shrinking the array every time
    }
    
    helper(arr)

    return result;
}


// collectOddValues([1,2,3,4,5,6,7,8,9])  // function call

///// Pure Recursion /////
function collectOddValues(arr){
    let newArr = []; // the array is going to be reset every time the function is called
    
    if(arr.length === 0) { // base case
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){ // check if the first element is odd
        newArr.push(arr[0]); // if it is, push it to the result array
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1))); 

    return newArr;
}
// Explanation: Call Stack --> 
// collectOddValues([1,2,3,4,5]) -> first one gets sliced off and pushed to the newArr since it is odd
// [1].concat(collectionOddValues([2,3,4,5].slice(1))) -> nothing gets pushed to the newArr since 2 isnt odd
        // [].concat(collectionOddValues([3,4,5].slice(1))) ->
            // [3].concat(collectionOddValues([4,5].slice(1))) -> 3 gets pushed to the newArr since it is odd
                // [].concat(collectionOddValues([4,5].slice(1))) -> 
                    // [5].concat(collectionOddValues([].slice(1))) -> it will hit the base case and return the newArr
                        // []
   // now we have [1,3,5] in the newArr due to the concat method 

   ///////// Power ///////// 

    function power(base, exponent){
        if(exponent === 0) return 1;
        return base * power(base,exponent-1);
    }
    //console.log(power(2,2)) // 4
    // power(2,0) -> 1

    ///////// Factorial /////////
    function factorial(num){
        if(num === 0) return 1; // number one since actorial zero (0!) is always 1 !!!!!!!!!
        return num * factorial(num-1); 
    }
    /*
console.log(factorial(4))
console.log(factorial(0)) // 1
console.log(factorial(4)) // 1  
*/

//////// Product of Array /////////

function productOfArray(arr) {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1)); // Multiply the first element by the product of the rest of the array.
}
// arr[0] is the first element in the array gets multiplied by the second element in the arraya and so on until the array is empty

//console.log(productOfArray([1,2,3])) // 6

////////// Recursive Range ////////// 

function recursiveRange(num){
    if(num === 0 ) return 0;
    return num + recursiveRange(num-1); // num -1 is the number before the number we are on
}
//console.log(recursiveRange(10)) // 55

//////// Fibonacci //////////

function fib(num){
    if (num <= 2) return 1; // base case
    return fib(num-1) + fib(num-2); // recursive call
}
/////
//////////// reverse strings ////////////

function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];  //// Recursive case: Reverse the substring after the first character and then append the first character.
}
console.log(reverse('awesome')) // 'emosewa'