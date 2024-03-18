


function hasPathunDirected(edgeList, source, dest) {
// convert edgeList to adjecencyList
const adjList = edgeListToAdjecencyList(edgeList);

const stack = [source];
const visitedNodes = new Set();
while(stack.length > 0){
    const current = stack.pop();
    if(current == dest){
        return true;
    }

    if(visitedNodes.has(current)){ 
        return false;
    }
    visitedNodes.add(current);

        for(let ele of adjList[current]){
            
            stack.push(ele);
    }

}

return false;


}

function hasPathunDirectedR(edgeList, source, dest, visitedNodes= new Set()) {

    // convert edgeList to adjecencyList

// const visitedNodes = new Set();
if(source == dest) return true;
if(visitedNodes.has(source)) return false;
visitedNodes.add(source);

    for(let e of adjList[source]){
        
        if(hasPathunDirectedR(edgeList, e, dest, visitedNodes) == true)
        {
            return true;
        }
     
}

return false;
}

function edgeListToAdjecencyList(edgeList) {

let adjList = {};

for(let e of edgeList){


    if(!(e[0] in adjList)){
        adjList[e[0]] = [];
    }
    if(!(e[1] in adjList)){
        adjList[e[1]] = [];
    }
    adjList[e[0]].push(e[1]);
    adjList[e[1]].push(e[0]);


}

return adjList;
}

const edges = [
    ['i','j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

console.log(edgeListToAdjecencyList(edges))

console.log(hasPathunDirected(edges, 'i', 'k'));
const adjList = edgeListToAdjecencyList(edges);
console.log(hasPathunDirectedR(adjList, 'i', 'k'));
