


/**
 * given a graph and source and destination find whether it has path or not 
 */

/**
 * Depth first search with stack 
 */
function hasPathBtnNodes(graph, source, dest){

// 

const stack = [source];

while(stack.length > 0){
    let current = stack.pop();
    if(current == dest) return true;

    for(let element of graph[current]){
        stack.push(element);
    }
}

return false;

}

function hasPathBtnNodesR(graph, source, dest){
    if(source == dest) return true;

    for( let ele of graph[source]) {
        if(hasPathBtnNodesR(graph, ele, dest) == true){
            return true;
        }
    }

    return false;
}



function hasPathBtnNodesBFS(graph, source, dest){

    const queue = [source];

    while(queue.length>0){
        const current = queue.shift();

        if(current == dest){
            return true;
        }

        for(let ele of graph[current]){

            queue.push(ele);
        }
    }
     return false;
}


const graph = {f: ['g','i'],
g: ['h'],
h:[],
i: ['g','k'],
j:['i'],
k: []}
const source = 'f';
const dest = 'h';
console.log(hasPathBtnNodes(graph, source, dest))

console.log(hasPathBtnNodesR(graph, source, dest))

console.log(hasPathBtnNodesBFS(graph, source, dest))
