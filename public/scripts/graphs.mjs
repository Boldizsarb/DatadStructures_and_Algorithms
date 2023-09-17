console.log("hello from graphs.mjs")


class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }// add a vertex to the adjacency list
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2) // push v2 into v1's array
        this.adjacencyList[v2].push(v1) // push v1 into v2's array
    }// add an edge to the adjacency list

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2 // filter out vertex2 from vertex1's array
          );
          this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1  // filter out vertex1 from vertex2's array
          );
    }// remove an edge from the adjacency list
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){ // while the vertex still has edges
            const adjacentVertex = this.adjacencyList[vertex].pop() // pop off the last element in the array
            this.removeEdge(vertex, adjacentVertex) // remove the edge between the vertex and the adjacentVertex
        }
        delete this.adjacencyList[vertex] // delete the vertex
    }// remove a vertex from the adjacency list
    depthFirstRecursive(start){
        const result = [] // create a result array
        const visited = {} // create a visited vertex object 
        const adjacencyList = this.adjacencyList // create a variable to store the adjacency list

        function dfs(vertex){ // create a dfs function
            if(!vertex) return null // if there is no vertex, return null // base case
            visited[vertex] = true // mark the vertex as visited
            result.push(vertex) // push the vertex into the result array
            adjacencyList[vertex].forEach(neighbor => { // for each neighbor of the vertex
                if(!visited[neighbor]){ // if the neighbor has not been visited
                    return dfs(neighbor) // recursively call dfs on the neighbor
                }
            })
        }dfs(start) // invoke the dfs function on the start vertex
        return result // return the result array
    } // traverse the graph recursively
    depthFirstIterative(start){
        const stack = [start] // create a stack with the start vertex
        const result = [] // create a result array
        const visited = {} // create a visited vertex object
        let currentVertex // create a current vertex variable
        visited[start] = true // mark the start vertex as visited
        while(stack.length){ // while the stack is not empty
            currentVertex = stack.pop() // pop off the last element in the stack
            result.push(currentVertex) // push the current vertex into the result array
            this.adjacencyList[currentVertex].forEach(neighbor => { // for each neighbor of the current vertex
                if(!visited[neighbor]){ // if the neighbor has not been visited
                    visited[neighbor] = true // mark the neighbor as visited
                    stack.push(neighbor) // push the neighbor into the stack
                }
            })
        }
        return result // return the result array
    } // traverse the graph iteratively
    

}
let g = new Graph()
g.addVertex("Tokyo")
g.addVertex("Dallas")
g.addVertex("Aspen")
g.addEdge("Tokyo", "Dallas")
g.addEdge("Dallas", "Aspen")
console.log(g)
console.log(g.depthFirstRecursive("Tokyo"))
