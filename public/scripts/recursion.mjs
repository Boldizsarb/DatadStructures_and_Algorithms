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