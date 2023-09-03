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

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
 /*
let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");
console.log(first);
console.log(first.next.next.next.next.val);
*/
// to substituto the above code we can use a constructor function
class singlyLinkedList{
    cunstructor(){
        this.head = null; // pointer to the first node in the list
        this.tail = null; // pointer to the last node in the list
        this.length = 0; // length of the list
    }
    push(val){ // inserting at the end of the list new push becomes the tail
        let newNode = new Node (val); // if there in no head in the list ergo empty list
        if(!this.head){
            this.head = newNode; // the head and the tail are the same node
            this.tail = this.head; // the head and the tail are the same node
        }else{ // if there is a head in the list ergo it is not empty
            this.tail.next = newNode; // the tail points to the new node
            this.tail = newNode; // the tail becomes the new node
        }
        this.length++; // increment the length of the list
        this.tail = newNode; // the tail becomes the new node
    }
    popp(){
        if(!this.head) return undefined; // if the list is empty return undefined
    }
}
let list = new singlyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("99");
console.log(list);
console.log(list.head);
console.log(list.tail);
console.log(list.head.next);