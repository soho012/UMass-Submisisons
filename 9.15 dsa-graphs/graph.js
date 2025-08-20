class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    vertexArray.forEach (vertex => this.nodes.add(vertex));
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    if (this.nodes.has(v1) && this.nodes.has(v2)){
      v1.adjacent.add(v2);
      v2.adjacent.add(v1);
    }
    else {
      console.error("Error");
    }
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    if (this.nodes.has(v1) && this.nodes.has(v2)) {
      v1.adjacent.delete(v2);
      v2.adjacent.delete(v1);
    }
    else {
      console.error("Error");
    }
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    if (this.nodes.has(vertex)) {
      for (let node of this.nodes) {
        node.adjacent.delete(vertex);
      }

      this.nodes.delete(vertex);
    }

    else {
      console.error("error");
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const result = [];
    const visited = new Set();

    function dfs(node){
      if (!node || visited.has(node)) return;
      visited.add(node);
      result.push(node.value);

      for (const n of node.adjacent) {
        dfs(n);
      }
    }

    dfs(start)
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const result = [];
    const visited = new Set();
    const queue = [start];

    while (queue.length) {
      const node = queue.shift();

      if (!visited.has(node)) {
        visited.add(node);
        result.push(node.value);

        for (const neighbor of node.adjacent) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
       return result;
  }
}

module.exports = {Graph, Node}