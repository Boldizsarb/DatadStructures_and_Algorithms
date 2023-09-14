console.log("heaps")   

class Heap {
    constructor() {
        this.heap = []; // array representation of heap, there are no pointers 
    }
    insert(value){
        this.heap.push(value);
        this.bubbleUp();
    }
    bubbleUp(){
        let index = this.heap.length -1; // last element in the heap
        const element = this.heap[index]; // grabbing the last element in the heap
        while(index > 0){ // while index is greater than 0 after that we are at the root and there is no parent
            let parentidx = Math.floor((index -1) / 2); // parent index
            let parent = this.heap[parentidx]; // parent value
            if(element <= parent) break; // if element is less than parent, break
            this.heap[parentidx] = element; // swap
            this.heap[index] = parent; // swap
            index = parentidx; // update index to parent index
        
        }
    }
    extractMax(){
        const max = this.heap[0]; // grab the max value wihich is the biggest value
        const end = this.heap.pop(); // grab the last element in the heap
        if(this.heap.length > 0){ // if the heap is not empty
        this.heap[0] = end; // swap the first element with the last element
        this.trickleDown(); // trickle down
        }
        return max; // return the max value
        //// trickle down now 
    }
    trickleDown(){
        let index = 0; // start at the root
        const length = this.heap.length; // length of the heap
        const element = this.heap[0]; // grab the first element in the heap
        while(true){
            let leftChildIdx = (2 * index) + 1; // left child index
            let rightChildIdx = (2 * index) + 2; // right child index
            let leftChild, rightChild; // left and right child values
            let swap = null; // swap variable
            if(leftChildIdx < length){ // if left child index is less than the length of the heap
                leftChild = this.heap[leftChildIdx]; // grab the left child value
                if(leftChild > element){ // if left child value is greater than the element
                    swap = leftChildIdx; // swap the left child index
                }
            }
            if(rightChildIdx < length){ // if right child index is less than the length of the heap
                rightChild = this.heap[rightChildIdx]; // grab the right child value
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){ // if swap is null and right child is greater than element or swap is not null and right child is greater than left child
                    swap = rightChildIdx; // swap the right child index
                }
            }
            if(swap === null) break; // if swap is null break, if we dont have a swap we are done
            this.heap[index] = this.heap[swap]; // swap
            this.heap[swap] = element; // swap
            index = swap; // update index to swap
        }
    }
}
// let heap = new Heap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);
// console.log(heap);
// console.log(heap.extractMax());
// console.log(heap);
//////////////////////////// Priority Queue ////////////////////////////

class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
        //this.insertTime = Date.now();  // time stamp, could help distinguish between two nodes with the same priority
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(value, priority){ // insert
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.boubbleUp();
    }
    boubbleUp(){
        let index = this.values.length -1; // last element in the heap
        const element = this.values[index]; // grabbing the last element in the heap
        while(index > 0){ // while index is greater than 0 after that we are at the root and there is no parent
            let parentidx = Math.floor((index -1) / 2); // parent index
            let parent = this.values[parentidx]; // parent value
            if(element.priority >= parent.priority) break; // if element's priority is less than parent's priority, break
            this.values[parentidx] = element; // swap
            this.values[index] = parent; // swap
            index = parentidx; // update index to parent index
        }
    }
    dequeue(){ // removing 
        const max = this.values[0]; // grab the max value wihich is the biggest value
        const end = this.values.pop(); // grab the last element in the heap
        if(this.values.length > 0){ // if the heap is not empty
        this.values[0] = end; // swap the first element with the last element
        this.trickleDown(); // trickle down
        }
        return max; // return the max value
        //// trickle down now 
    }
    trickleDown(){
        let index = 0; // start at the root
        const length = this.values.length; // length of the heap
        const element = this.values[0]; // grab the first element in the heap
        while(true){
            let leftChildIdx = (2 * index) + 1; // left child index
            let rightChildIdx = (2 * index) + 2; // right child index
            let leftChild, rightChild; // left and right child values
            let swap = null; // swap variable
            if(leftChildIdx < length){ // if left child index is less than the length of the heap
                leftChild = this.values[leftChildIdx]; // grab the left child value
                if(leftChild.priority > element.priority){ // if left child value is greater than the element
                    swap = leftChildIdx; // swap the left child index
                }
            }
            if(rightChildIdx < length){ // if right child index is less than the length of the heap
                rightChild = this.values[rightChildIdx]; // grab the right child value
                if((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)){ // if swap is null and right child is greater than element or swap is not null and right child is greater than left child
                    // over here the time stamp could be changed with the same priority!! 
                    swap = rightChildIdx; // swap the right child index
                }
            }
            if(swap === null) break; // if swap is null break, if we dont have a swap we are done
            this.values[index] = this.values[swap]; // swap
            this.values[swap] = element; // swap
            index = swap; // update index to swap
        }
    }

}

 let ER = new PriorityQueue();
    ER.enqueue("common cold", 5);
    ER.enqueue("gunshot wound", 1);
    ER.enqueue("high fever", 4);
    ER.enqueue("broken arm", 2);
    ER.enqueue("glass in foot", 3);
console.log(ER);
console.log(ER.dequeue());
console.log(ER);
