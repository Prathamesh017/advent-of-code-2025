import fs from "fs";
const input = fs.readFileSync("input.txt", "utf8");
const graph = input.trim().split("\n").map(line => line.trim().split(" "));


  

  function  findPath(graph,key){
    for(let i=0;i<graph.length;i++){
      console.log(graph[i][0])  
        if(graph[i][0]===key+":"){
            return graph[i];
        }
    }
  }

  function findAllPaths(graph,startPath){
    let count=0
    for(let i=1;i<startPath.length;i++){
      const val=startPath[i];
      if(val==="out"){
            count++
            return count;
      }
      count+=findAllPaths(graph,findPath(graph,val));

    }
    return count;
    
    
    

  } 



  const startPath = findPath(graph,"you");
  console.log(startPath)
  const ans=findAllPaths(graph,startPath);
  console.log(ans);