console.log("hello from binary_tree.mjs");

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this; // none of the code below will run because we are returning
        }else{
            let current = this.root; // we are starting at the root
            while(true){
                if(value === current.value) return undefined; // if the value is already in the tree
                if(value < current.value){ // if the value is less than the current node
                    if(current.left === null){ // if there is no left node
                        current.left = newNode; // set the new node to the left
                        return this; // return the tree break out of the loop
                    }else{
                        current = current.left; // set the current node to the left node
                    }
                }else if(value > current.value){ // handling the right side of the tree
                    if(current.right === null){ // if there is no right node
                        current.right = newNode; // set the new node to the right
                        return this; // return the tree break out of the loop
                    }else{
                        current = current.right; // set the current node to the right node
                    }
                } 
            }
        }
    }
    get(value){
        if(this.root === null) return false; // if there is no root return false
        if(this.root.value === value) return this.root; // if the root is the value return the root
        let current = this.root; // set the current node to the root
        let found = false; // set found to false
        while(current && !found){ // while there is a current node and found is false
            if(value < current.value){ // if the value is less than the current node
                current = current.left; // set the current node to the left node
            }else if(value > current.value){ // if the value is greater than the current node
                current = current.right; // set the current node to the right node
            }else{
                found = true; // set found to true
            }
        }
        if(!found) return false; // if found is false return false
        return current; // return the current node
    }
    contains(value){
        if(this.root === null) return false; // if there is no root return false
        if(this.root.value === value) return this.root; // if the root is the value return the root
        let current = this.root; // set the current node to the root
        let found = false; // set found to false
        while(current && !found){ // while there is a current node and found is false
            if(value < current.value){ // if the value is less than the current node
                current = current.left; // set the current node to the left node
            }else if(value > current.value){ // if the value is greater than the current node
                current = current.right; // set the current node to the right node
            }else{
                return true; // return true
            }
        }
        return false; // return false
    }
    /////////////////////// Tree Traversal /////////////////////// still within the BinarySearchTree class
    BreadthFirstSearch(){

        let node = this.root;
        let data = [];
        let queue = [];

        queue.push(this.root); // add the root to the queue
        while(queue.length){ // while there is something in the queue
            let node = queue.shift(); // remove the first item in the queue
            data.push(node.value); // adding in to the list that we are returning
            if(node.left) queue.push(node.left); // if there is a left node add it to the queue
            if(node.right) queue.push(node.right); // if there is a right node add it to the queue
        }
        return data;
    }

    DepthFirstSearchPreOrder(){
        let data = [];

        function traverse(node){
            data.push(node.value); // add the node to the list
            if(node.left) traverse(node.left); // if there is a left node traverse the left node
            if(node.right) traverse(node.right); // if there is a right node traverse the right node
        }
        traverse(this.root); // start at the root
        return data;
    }

    DepthFirstSearchPostOrder(){
        let data = [];

        function traverse(node){
            if(node.left) traverse(node.left); // if there is a left node traverse the left node
            if(node.right) traverse(node.right); // if there is a right node traverse the right node
            data.push(node.value); // add the node to the list
        }
        traverse(this.root); // start at the root
        return data;
    }

    DepthFirstSearchInOrder(){
        let data = [];

        function traverse(node){
            if(node.left) traverse(node.left); // if there is a left node traverse the left node
            data.push(node.value); // add the node to the list
            if(node.right) traverse(node.right); // if there is a right node traverse the right node
        }
        traverse(this.root); // start at the root
        return data;
    }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BreadthFirstSearch());
console.log(tree.DepthFirstSearchPreOrder());
console.log(tree.DepthFirstSearchPostOrder());
console.log(tree.DepthFirstSearchInOrder());




///////////// Tree Traversal ///////////// Tree Traversal//////////////////////// Tree Traversal//// 

