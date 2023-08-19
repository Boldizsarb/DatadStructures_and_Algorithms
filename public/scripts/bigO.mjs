// Example 
// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number  n

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
    total += i;
    }
    return total;
    }

console.log("Sum of all the numbers: "+addUpTo(6));

// exact same solution, but written differently

function addUpTo2(n) {  // mathematical formula
    return n * (n + 1) / 2;
    }
console.log("Sum of all the numbers: "+addUpTo2(6));

// compare the two functions SPEEED  firstly
//  TIMER FUNCTION ////// TIMER   ///// TIMER 

function addUpTo1(n) { // first function
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }
  
  let t1 = performance.now();
  // addUpTo1(1000000000); // takes too long 
  let t2 = performance.now();
  //console.log(`First funct. Time Elapsed: ${(t2 - t1) / 1000} seconds.`) // function call


function addUpTo3(n) { // second function
    return n * (n + 1) / 2;
}
let time1 = performance.now();
addUpTo3(1000000000);
let time2 = performance.now();
 //console.log(`Second funct. Time Elapsed: ${(time2 - time1) / 1000} seconds.`) // function call
/*
Manually time something is not the best idea 

The Problem with Time

- Different machines will record different times
- The *same* machine will record different times!
- For fast algorithms, speed measurements may not be precise enough?    */

//  TIMER FUNCTION ////// TIMER   ///// TIMER 

// COUNTING OPERATIONS ////// COUNTING OPERATION

function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
}
  //  countUpAndDown(10);   // function call

/////// SPACE COMPLEXITY /////////////// 

    function double(arr) { /// space complexity O(n)  // n is the length of the array  the function doubles each element in the array 
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
          newArr.push(2 * arr[i]);
        }
        return newArr;
      }
    console.log(double([1,2,3,4,5])); // function call