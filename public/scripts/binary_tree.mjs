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
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
console.log(tree);