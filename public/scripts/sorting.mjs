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