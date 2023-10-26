/**
 * largest component
Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

test_00:
largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); // -> 4
test_01:
largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
}); // -> 6
test_02:
largestComponent({
  3: [],
  4: ['6'],
  6: ['4', '5', '7', '8'],
  8: ['6'],
  7: ['6'],
  5: ['6'],
  1: ['2'],
  2: ['1']
}); // -> 5
test_03:
largestComponent({}); // -> 0
test_04:
largestComponent({
  0: ['4','7'],
  1: [],
  2: [],
  3: ['6'],
  4: ['0'],
  6: ['3'],
  7: ['0'],
  8: []
}); // -> 3
 */


function largestComponent(graph){

    console.log(graph)
    let visited = new Set();
    let largestSize = 0;
    for(let n in graph){
        const size = exploreSize(graph, n, visited);
        if(largestSize < size) largestSize = size;
    }

    return largestSize;
}


function exploreSize(graph, source, visited) {

    if(visited.has(source)) return 0;

    visited.add(source);
    let size = 1;
    for(let n of graph[source]){
       size += exploreSize(graph, n, visited);
    }

    return size;
}

const graph = {
    '0': ['8', '1', '5'],
    '1': ['0'],
    '5': ['0', '8'],
    '8': ['0', '5'],
    '2': ['3', '4'],
    '3': ['2', '4'],
    '4': ['3', '2']
  };
console.log(largestComponent(graph))