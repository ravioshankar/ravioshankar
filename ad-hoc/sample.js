function hello (){

    alert("Welcome");
}


function grapghTraversalDFS(graph, startingNode) {

    // 
    let stack = [startingNode];


    while(stack.length > 0){
    let current = stack.pop();

        if(current){
            for(let neighber of graph[current]){
            stack.push(...neighber);

            }
        }
    }

}



let graphforBFS = {
    a: ['c','b'],
    b: ['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

grapghTraversalDFS(graphforBFS, a)