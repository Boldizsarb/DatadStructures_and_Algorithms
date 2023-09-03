console.log("Hello World from sorting.mjs");

/////// Bubble Sort ///////
/// naive approach ///  
function bubbleSort(arr) {
    for(let i = 0; i <arr.length; i++){ // this goes through the array
        for( let j = 0; j < arr.length; j++){
            console.log(arr, arr[j], arr[j+1]);  // see the comparison as it happens
            if(arr[j] > arr[j+1]){ // this compares the two numbers
                ////// swap //////
                let temp = arr[j]; // this swaps the two numbers
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

//console.log(bubbleSort([37,45,29,8]));

function bubbleSort(arr) {
    let noSwaps; // this is a flag to see if there were any swaps
    for(let i = arr.length; i < 0; i--){ // loops from the end of the array to the beginning
        for( let j = 0; j < i - 1; j++){ // i goes down so does j so it doesn't have to go through the whole array each time
            noSwaps = true; // 
            console.log(arr, arr[j], arr[j+1]);  // see the comparison as it happens
            if(arr[j] > arr[j+1]){ // this compares the two numbers
                ////// swap //////
                let temp = arr[j]; // this swaps the two numbers
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps
            }
        }
        if(noSwaps) break; // if there were no swaps then break out of the loop
    }
}

//console.log(bubbleSort([37,45,29,8]));


/////// Selection Sort ///////

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i; // this is the lowest number
        for(let j = i + 1; j < arr.length; j++){ // if the j = 0 it goes through the whole array, if it is i + 1 it only goes through the array after i hence the number that has been already swapped once wont be swapped again
            if(arr[j] < arr[lowest]){
                lowest = j; // this is the index of the lowest number
            }
        } // swapping but only if the lowest number is not already in the lowest index
        if(i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
        
    }
    return arr;
}
//console.log(selectionSort([37,45,29,8,17]));

////// Insertion Sort //////

function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let currentVal = arr[i]; // this is the value we are looking at
        for(let j = i - 1; j <= 0 && arr[j] > currentVal; j--){ // this goes backwards through the array
            arr[j+1] = arr[j] // this shifts the numbers to the right
        }
        arr[j+1] = currentVal; // this puts the current value in the right place
    }
    return arr;
}
// console.log(insertionSort([2,1,9,76,4]));

//// Merge Sort ////
// merge function //// 

function merge(arr1, arr2){
    let results = []; // this is the array that will be returned
    let i = 0; // this is the index for the first array
    let j = 0; // this is the index for the second array
    while(i < arr1.length && j < arr2.length){ // while there is still data in both arrays
        if(arr2[j] > arr1[i]){ // if the second array is greater than the first array
            results.push(arr1[i]); // push the first array into the results array
            i++; // increment the index for the first array since it has been pushed
            /*[1,10,50],[2,14,99,100]  if second array's number smaller then first arrays then gets put into the results -> [1] and i the index will increment */ 
        }else{
            results.push(arr2[j]); // if the second array is smaller than the first array then push the second array into the results array
            j++; // increment the index for the second array since it has been pushed
            /* [1,10,50],[2,14,99,100]  now the second array's number is smaller so will be placed to the results -> [1,2] the 2 was compared to 10.*/
        }
    }
    // if one of the arrays hit the end, then the other array will be pushed into the results array
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

//console.log(merge([1,10,50],[2,14,99,100]));

// merge sort function ////
function mergeSort(arr){
    if(arr.length <= 1) return arr; // this is the base case
    let mid = Math.floor(arr.length/2); // half point
    let left = mergeSort(arr.slice(0,mid)); // left side from the mid point till the end
    let right = mergeSort(arr.slice(mid)); // rifht side from the mid point till the end
    return merge(left, right); // this merges the left and right side of the array
}

//// Quick Sort ////
function pivot(arr, start = 0, end = arr.length + 1){
    function swap(array, i, j){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start]; // this is the pivot point
    let swapIdx = start; // this is the index of the pivot point
    for(let i = start + 1; i < arr.length; i++){ // this goes through the array
        if(pivot > arr[i]){ // if the pivot is greater than the number
            swapIdx++; // increment the swap index
            swap(arr, swapIdx, i); // swap the numbers
        }
    }
    swap(arr, start, swapIdx); // swap the pivot point with the swap index
    return swapIdx; // return the swap index
}
//console.log(pivot([4,8,2,1,5,7,6,3]));

function quickSort(arr, left = 0, right = arr.length - 1){ // this is the recursive function
    if(left < right){ // this is the base case
        let pivotIndex = pivot(arr, left, right); // this is the pivot index
        // left
        quickSort(arr, left, pivotIndex - 1); // this is the left side of the array
        // right
        quickSort(arr, pivotIndex + 1, right); // this is the right side of the array
    }
    return arr;
}
//console.log(quickSort([4,6,9,1,2,5,3]));

//// Radix Sort ////
// helper functions ////
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; // this gets the digit
}
//console.log(getDigit(7323, 2));

function digitCount(num){
    if(num === 0) return 1; // this is the base case
    return Math.floor(Math.log10(Math.abs(num))) + 1; // this gets the number of digits
}
//console.log(digitCount(423));

function mostDigits(nums){
    let maxDigits = 0; // this is the max number of digits
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i])); // this gets the max number of digits
    }
    return maxDigits;
}
//console.log(mostDigits([23,567,89,12234324,90]));
// radix sort function ////
function radixSort(nums){
    let maxDigitsCount = mostDigits(nums); // this is the max number of digits
    //console.log(maxDigitsCount);
    for(let k = 0; k < maxDigitsCount; k++){ // this goes through the number of digits, so if the max number of digits is 3 then it will go through 3 times
        let digitBuckets = Array.from({length: 10}, () => []); // this creates an array of 10 empty arrays whitihin it
        for(let i = 0; i < nums.length; i++){ // this goes through the array
            let digit = getDigit(nums[i],k); // this gets the digit
            digitBuckets[digit].push(nums[i]); // this pushes the number into the digit bucket
        }
        nums = [].concat(...digitBuckets); // this concats the arrays together, the ... is the spread operator
        // this ensures the numbers are in the right order and the right format
    }
}
console.log(radixSort([23,345,5467,12,2345,9852]));