console.log("Hello from stacks.mjs");

///// Stack //////

let stack = [];
////////// push and pop //////////
stack.push("google");
stack.push("instagram");
stack.push("youtube");
stack.pop(); // removes the last item in the stack
stack.push("amazon");
stack.pop(); // amazon is removed as that is the last item in the stack
//////////////// unshift and shift /////////////
// if unshift is used instead of push, then the first item in the stack will be removed
stack.unshift("create new file");
stack.unshift("resized file");
stack.shift(); // removes the first item in the stak which is resized file
//// this is not efficient! since the whole array has to be reindexed!!!!!! 

//////////////// linked list /////////////
// we can use linked list to implement a stack

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null; // the top of the stack or the head
        this.last = null; // the bottom of the stack or the tail
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val); // create a new node
        if(!this.first){
            this.first = newNode; // if the stack is empty, then the first and last will be the new node
            this.last = this.first;
        }else {
            let temp = this.first; // store the current first property in a variable
            this.first = newNode; // set the first property to be the new node
            this.first.next = temp; // set the next property on the node to be the previously stored variable
        }
        return ++this.size; // increment the size by 1
    }

    pop(){
        if(!this.first) return null; // if there is no first property, just return null
        let temp = this.first; // store the first property in a variable
        if(this.first === this.last){ // edge case 
            this.last = null; // if there is only 1 node, set the first and last to be null
        }
        this.first = this.first.next; // if there is more than 1 node, set the first property to be the next property of first
        this.size--; // decrement the size by 1
        return temp.value; // return the value of the node at the beginning
    }
}

let stack1 = new Stack();
stack1.push("first");
stack1.push("second");
stack1.push("third");
console.log(stack1);
stack1.pop();
console.log(stack1);

// adding to the end and removing from the end is more efficient (not constant time) than adding to the beginning and removing from the beginning -> this is constant 


/////////////// QUEUES ////////////////// QUEUES //////////////QUEUES /////////////// QUEUS //////////////////////

let q = [];
q.push("first");
q.push("second");
q.push("third");
console.log(q);
q.shift(); // removes the first item in the queue
q.shift(); 
q.shift();
console.log(q);
/// but it ineficient since the whole array has to be reindexed!!!!!!

////////// unshift and pop //////////
q.unshift("first");
q.unshift("second");
q.unshift("third");
console.log(q);
q.pop(); // removes the last item in the queue
console.log(q);
////// this is not efficient since the whole array has to be reindexed!!!!!


////////// linked list //////////


class Node1 {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null; // the head
        this.last = null; // the tail
        this.size = 0;
    }
    enqueue(val){  // add to the end
        let newNode = new Node1(val); // create a new node
        if(!this.first){
            this.first = newNode; // if the queue is empty, set the first and last to be the new node
            this.last = this.first;
        }else{
            this.last.next = newNode; // otherwise set the next property on the current last to be that node
            this.last = newNode; // and then set the last property of the queue to be that node
        }
        return ++this.size; // increment the size by 1
    }   
    dequeue(){ // remove from the beginning
        if(!this.first) return null; // if there is no first property, just return null
        let temp = this.first; // store the first property in a variable
        if(this.first === this.last){ // edge case
            this.last = null; // if there is only 1 node, set the first and last to be null
        }
        this.first = this.first.next; // if there is more than 1 node, set the first property to be the next property of first
        this.size--; // decrement the size by 1
        return temp.value; // return the value of the node dequeued
    }
}
let queue = new Queue();
queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");
console.log(queue);
queue.dequeue();
console.log(queue);