


function bredthFirst(graph: any, startingNode: string) {

const queue = [startingNode];
while(queue.length > 0){
    const current = queue.shift();
    console.log(current);
    if(current)
    for(let neighbor of graph[current] ){
        queue.push(neighbor);
    }
}

}


// adjecency graph 

let graphforBFS = {
    a: ['c','b'],
    b: ['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

bredthFirst(graphforBFS, 'a');