console.log("Hello from doubley.mjs");

/// doubly linked list //////

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){ // inserting at the end of the list new push becomes the tail
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode; // the head and the tail are the same node
            this.tail = newNode; // the head and the tail are the same node
        }else{
            this.tail.next = newNode; // the new node becomes the next node of the tail. The tail points to the new node
            newNode.prev = this.tail; // the tail becomes the previous node of the new node
            this.tail = newNode; // the new node becomes the tail
        }
        this.length++; // the length of the list increases by one
        return this; // the list is returned

    }
    popp(){
        if(!this.head) return undefined; // if there is no head the list is empty and undefined is returned
        let temp = this.tail; // the tail becomes the temp node
        if(this.length === 1){ // if there is only one node in the list the list will be empty
            this.head = null;
            this.tail = null; 
        }else{
            this.tail = temp.prev; // the previous node of the tail becomes the tail
            this.tail.next = null; // the next node of the tail is null
            temp.prev = null; // the previous node of the temp node is null, it severes the connection to the last node
        }
        this.length--; // the length of the list decreases by one
        return temp; // the list is returned
    }
    shift(){ // removing the first node of the list
        if(!this.head) return undefined; // if there is no head the list is empty and undefined is returned
        let oldHead = this.head; // the head becomes the temp node
        if(this.length === 1){ // if there is only one node in the list the list will be empty
            this.head = null;
            this.tail = null; 
        }else{
            this.head = oldHead.next; // the next node of the head becomes the head
            this.head.prev = null; // the previous node of the head is null
            oldHead.next = null; // the next node of the temp node is null, it severes the connection to the last node
        }
        this.length--; // the length of the list decreases by one
        return oldHead; // the list is returned
    }
    unshift(val){ // inserting at the beginning of the list new unshift becomes the head
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode; // the head and the tail are the same node
            this.tail = newNode; // the head and the tail are the same node
        }else{
            this.head.prev = newNode; // the new node becomes the previous node of the head. The head points to the new node
            newNode.next = this.head; // the head becomes the next node of the new node
            this.head = newNode; // the new node becomes the head
        }
        this.length++; // the length of the list increases by one
        return this; // the list is returned
    }
    get(index){ // getting a node by its position
        if(index < 0 || index >= this.length) return null; // if the index is out of bounds null is returned
        if(index <= this.length/2){ // if the index is less than or equal to half the length of the list ergo start from the head
            console.log("working from start");
            let count = 0;
            let current = this.head; // the current node is the head
            while(count !== index){ // while the count is not equal to the index
                current = current.next; // the current node becomes the next node
                count++; // the count increases by one
            }
            return current; // the current node is returned
        }else{ // counting from the tail form the end of the list
            console.log("working from end");
            let count = this.length - 1;
            let current = this.tail; // the current node is the tail
            while(count !== index){ // while the count is not equal to the index
                current = current.prev; // the current node becomes the previous node
                count--; // the count decreases by one
            }
            return current; // the current node is returned
        }
    }
    set(index,val){ // setting the value of a node at a certain index
        let foundNode = this.get(index); // the found node is the node at the index
        if(foundNode !== null){ // if there is a found node
            foundNode.val = val; // the value of the found node is set to the value
            return true; // true is returned
        }
        return false; // false is returned
    }
    insert(index,val){ // inserting a node at a certain index
        if(index < 0 || index > this.length) return false; 
        if(index === 0) return !!this.unshift(val); // if the index is 0 the value is unshifted to the beginning of the list
        if(index === this.length) return !!this.push(val); // if the index is the length of the list the value is pushed to the end of the list
        let newNode = new Node(val); // a new node is created
        let beforeNode = this.get(index - 1); // the node before the index becomes the before node
        let afterNode = beforeNode.next; // the node after the index becomes the after node
        beforeNode.next = newNode; // the new node becomes the next node of the before node
        newNode.prev = beforeNode; // the before node becomes the previous node of the new node
        newNode.next = afterNode; // the after node becomes the next node of the new node
        afterNode.prev = newNode; // the new node becomes the previous node of the after node
        this.length++; // the length of the list increases by one
        return true; // true is returned
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined; // if the index is out of range undefined is returned
        if(index === 0) return this.shift(); // if the index is 0 the first node is removed
        if(index === this.length - 1) return this.popp(); // if the index is the length of the list minus one the last node is removed
        let removedNode = this.get(index); // the removed node is the node at the index
        let beforeNode = removedNode.prev; // the before node is the previous node of the removed node
        let afterNode = removedNode.next; // the after node is the next node of the removed node
        beforeNode.next = afterNode; // the after node becomes the next node of the before node
        afterNode.prev = beforeNode; // the before node becomes the previous node of the after node
        removedNode.next = null; // the next node of the removed node is null
        removedNode.prev = null; // the previous node of the removed node is null
        this.length--; // the length of the list decreases by one
        return removedNode; // the removed node is returned
    }
}

let list = new DoublyLinkedList();
list.push("Harry");
list.push("Ron");
list.push("Hermione");
list.push("Ginny");
console.log(list);
list.insert(2,"Fred");
console.log(list);
console.log(list.get(2));
list.remove(2);
console.log(list.get(2));
