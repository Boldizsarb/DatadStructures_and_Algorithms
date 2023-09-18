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
    breadthFirst(start){
        const queue = [start] // create a queue with the start vertex
        const result = [] // create a result array
        const visited = {} // create a visited vertex object
        let currentVertex // create a current vertex variable
        visited[start] = true // mark the start vertex as visited
        while(queue.length){ // while the queue is not empty
            currentVertex = queue.shift() // shift off the first element in the queue
            result.push(currentVertex) // push the current vertex into the result array
            this.adjacencyList[currentVertex].forEach(neighbor => { // for each neighbor of the current vertex
                if(!visited[neighbor]){ // if the neighbor has not been visited
                    visited[neighbor] = true // mark the neighbor as visited
                    queue.push(neighbor) // push the neighbor into the queue
                }
            })
        }
        return result // return the result array
    } // traverse the graph iteratively

    

}
// let g = new Graph()
// g.addVertex("Tokyo")
// g.addVertex("Dallas")
// g.addVertex("Aspen")
// g.addEdge("Tokyo", "Dallas")
// g.addEdge("Dallas", "Aspen")
// console.log(g)
// console.log(g.depthFirstRecursive("Tokyo"))

// weighted graph//////// weighted graph   

class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }


class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight}) // push vertex2 into vertex1's array with a weight
        this.adjacencyList[vertex2].push({node: vertex1, weight}) // push vertex1 into vertex2's array
    }
    Dijkstra(start, finish){ // find the shortest path between two vertices
        const nodes = new PriorityQueue() // create a priority queue
        const distances = {} // create a distances object
        const previous = {} // create a previous object
        // build up initial state building the entire graph
        for(let vertex in this.adjacencyList){ // for each vertex in the adjacency list /// initialize the distances and previous objects to contain all vertices!!!!!
            if(vertex === start){ // if the vertex is the start vertex
                distances[vertex] = 0 // set the distance to 0
                nodes.enqueue(vertex, 0) // enqueue the vertex with a priority of 0
            } else { // else
                distances[vertex] = Infinity // set the distance to infinity
                nodes.enqueue(vertex, Infinity) // enqueue the vertex with a priority of infinity since we dont know the distance yet
            }
            previous[vertex] = null //  need to set previous ofthat node of that vertex to be null.
        }

    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);