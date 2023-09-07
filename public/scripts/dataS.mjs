console.log("dataS.mjs loaded");

// ES2015
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) { // if the  markLate() is called 3 or more times this kciks in
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been later ${this.tardies} times`;
    }
    addScore(score){  // setting the attribute
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage(){ // accessing the attribute
        let sum = this.scores.reduce(function(a,b){return a+b});
        return sum/this.scores.length;
    }
    static enrollStudents(){ // static methods are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application.
        return "ENROLLING STUDENTS!";
    } // it can not be called on one particular student but on the class itself
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
/* 

console.log(firstStudent.fullName());
console.log(secondStudent.markLate());
console.log(secondStudent.tardies);
secondStudent.addScore(92); // setting the attribute 
secondStudent.addScore(87); // setting the attribute
console.log(secondStudent.scores);// accessing the attribute 
console.log(secondStudent.calculateAverage());// accessing the attribute

*/

///// singly linked list ///////
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null; // pointer to the first node in the list
        this.tail = null; // pointer to the last node in the list
        this.length = 0; // length of the list
    }
    push(val){ // inserting at the end of the list new push becomes the tail
        var newNode = new Node(val); // if there eis no head the new node becomes the list head and tail ergo the list is empty
        if(!this.head){ // if there is no ergo empty list
            this.head = newNode; // the head and the tail are the same node
            this.tail = this.head; // the head and the tail are the same node
        } else { // if therer is a list ergo it is not empty
            this.tail.next = newNode; // the new node becomes the next node of the tail. The tail points to the new node
            this.tail = newNode;  // the new node becomes the tail
        }
        this.length++; // the length of the list increases by one
        return this; // the list is returned
    }
    popp(){ // removing the last node of the list
        if(!this.head) return undefined; // if there is no head the list is empty and undefined is returned
        var current = this.head; // the current node is the head
        var newTail = current; // the new tail is the current node
        while(current.next){ // while there is a next node
            newTail = current; // the new tail becomes the current node
            current = current.next; // the current node becomes the next node
        }
        this.tail = newTail;  // the new tail becomes the tail
        this.tail.next = null; // the next node of the tail is null, it severes the connection to the last node
        this.length--; 
        if(this.length === 0){ // if the list is empty
            this.head = null; // the head is null
            this.tail = null; // the tail is null
        }
        return current; // the current node is returned
            /* The way popp works:
            current list: HELLO -> GOODBYE -> 99
                   NT        C      // NT = next tail C = current tail    C is checking if there is a next tail if so it becomes the new tail, if not NT gets mooved to the next node and C becomes the new tail
            */  
    }
    shift(){ // removing the first node of the list
        if(!this.head) return undefined; // if there is no head the list is empty and undefined is returned
        let currentHead = this.head; // the current head is the head
        this.head = currentHead.next; // the next node of the head becomes the head 
        this.length--; // the length of the list decreases by one
        if(this.length === 0){ // if the list is empty
            this.head = null; // the head is null
            this.tail = null; // the tail is null
        }
        return currentHead; // the current head is returned
    }
    upshift(val){
        let newNode = new Node(val); // a new node is created
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{ // if there is no else the next node will point to itself! Not Good! hence it needst to be either!!! 
            newNode.next = this.head; // the new node points to the head
            this.head = newNode; // the new node becomes the head
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null; // if the index is out of range null is returned
        let counter = 0; // the counter is set to 0
        let current = this.head; // the current node is the head
        while(counter !== index){ // while the counter is not equal to the index, it is counting from the head like indexes, o, 1, 2, .... until it reaches the index
            current = current.next; // the current node becomes the next node
            counter++; // the counter increases by one
        }
        return current; // the current node is returned
    }
    set(index, val){
        let foundNode = this.get(index); // the found node is the node at the index
        if(foundNode){ // if there is a found node
            foundNode.val = val; // the value of the found node is set to the value
            return true; // true is returned
        }
        return false; // false is returned
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false; // if the index is out of range false is returned
        if(index === this.length) return !!this.push(val); // if the index is the length of the list the value is pushed to the end of the list
        if(index === 0) return !!this.upshift(val); // if the index is 0 the value is unshifted to the beginning of the list
        let newNode = new Node(val); // a new node is created
        let prev = this.get(index - 1); // the previous node is the node before the index
        let temp = prev.next; // the temp node is the next node of the previous node
        prev.next = newNode; // the previous node points to the new node
        newNode.next = temp; // the new node points to the temp node
        this.length++; // the length of the list increases by one
        return true; // true is returned
    }
}


let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("99");
console.log(list);
list.popp();
console.log(list);
list.shift();
console.log(list);
list.upshift("NEW HEAD");
console.log(list);
console.log(list.get(0));
// console.log(list.head);
// console.log(list.tail);
// console.log(list.head.next);

