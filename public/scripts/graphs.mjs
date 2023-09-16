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

}
let g = new Graph()
g.addVertex("Tokyo")
g.addVertex("Dallas")
g.addVertex("Aspen")
g.addEdge("Tokyo", "Dallas")
g.addEdge("Dallas", "Aspen")
console.log(g)
g.removeEdge("Tokyo", "Dallas")
console.log(g)
g.removeVertex("Dallas")
console.log(g)