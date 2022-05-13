 

function depthFirstPrint(graph: any, startingNode: string) {

    const stack = [startingNode];

    while(stack.length> 0){
        const current = stack.pop();
        console.log(current);
        if(current)
        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
}


function depthFirstRecurrsive(graph: any, startingNode: string) {
    console.log(startingNode);
    for(let neighbor of graph[startingNode]){
        depthFirstRecurrsive(graph, neighbor);
    }
}

// adjecency graph 

let graph = {
    a: ['c','b'],
    b: ['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

depthFirstPrint(graph, 'a');
depthFirstRecurrsive(graph, 'a');
