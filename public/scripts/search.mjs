console.log("Hello from search.mjs");

function linearSearch(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
} 

console.log(linearSearch([5, 8, 1, 100, 12, 3, 12], 12)); // function call  

//////////// Binary Search //////////////

function binarySearch(arr, elem){
    let left = 0;  // left pointer
    let right = arr.length - 1;  // right pointer
    let middle = Math.floor((left + right) / 2) // middle pointer Math.floor() rounds a number DOWN to the nearest integer
    //  middle is also the current element we are looking at
    while(arr[middle] !== elem && left <= right ){ // while left pointer is less than or equal to right pointer, and the middle element is not the element we are looking for
        // && left <= right is to make sure we don't get stuck in an infinite loop
        if(elem < arr[middle]){
            right = middle - 1; // move right pointer down
        } else {
            left = middle + 1; // move left pointer up
        }
        middle = Math.floor((left + right) / 2); // recalculate middle
    }
    if(arr[middle] === elem) return middle; // if we find the element we are looking for,
    else return -1; // if we don't find it, return -1
}
 //console.log(binarySearch([2,5,6,9,13,15,28,30], 6)); // function call

 ///// NAIVE STRING SEARCH //////////////

function naiveSearch(long, short){
    let matches = 0;
    for(let i =0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            console.log(short[j], long[i+j]); // print out the characters we are comparing
            if(short[j] !== long[i+j]) {
                console.log("BREAK!"); // print out "BREAK!" if the characters don't match
                break;
            } // if the characters don't match, break out of the inner loop
            if(j === short.length - 1) {
                console.log("FOUND ONE!"); // print out "FOUND ONE!" if we complete the inner loop and find a match
                matches++;
            } // if we complete the inner loop and find a match, increment matches
        }
    }
    return matches;
}
console.log("Naive Search: "+naiveSearch("lorie loled", "lol")); // function call

// short version of it 
function naiveSearch2(long, short){
    let matches = 0;
    for(let i =0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]) break;
            if(j === short.length - 1) matches++;
        }
    }
    return matches;
}