import fs from "fs";
const input = fs.readFileSync("input.txt", "utf8");
const graph = input.trim().split("\n").map(line => line.trim().split(" "));
// const graph = [
//   ["svr", "aaa", "bbb"],
//   ["aaa", "fft"],
//   ["fft", "ccc"],
//   ["bbb", "tty"],
//   ["tty", "ccc"],
//   ["ccc", "ddd", "eee"],
//   ["ddd", "hub"],
//   ["hub", "fff"],
//   ["eee", "dac"],
//   ["dac", "fff"],
//   ["fff", "ggg", "hhh"],
//   ["ggg", "out"],
//   ["hhh", "out"]
// ];


function buildGraphMap(graph) {
    const map = new Map();
    for (const row of graph) {
      const key = row[0].replace(":", "");
      map.set(key, row);
    }
    return map;
}  

  function  findPath(map,key){
    return map.get(key);
  }

  function findAllPaths(map,startPath,isDAC,isFFT){
    let count=0
    console.log(startPath,isDAC,isFFT)
    if (!startPath) return 0;
    for(let i=1;i<startPath.length;i++){
      const val=startPath[i];
      const nextIsDAC = isDAC || val === "dac";
      const nextIsFFT = isFFT || val === "fft";
      if(val==="out"){
        
            if(nextIsDAC && nextIsFFT){
               count++;
            }
            continue;
      }
      
      count+=findAllPaths(map,findPath(map,val),nextIsDAC,nextIsFFT);

    }
    return count;
    
    
    

  } 
  



  // Optimized Function to count paths with requirements
  function countPathsWithRequirementsMemoized(startNode, requiredNodes) {
    const memo = new Map();
    let pathCount = 0;
    
    function getMemoKey(node, requirementsMet) {
        const reqStr = Array.from(requirementsMet).sort().join(',');
        return `${node}:${reqStr}`;
    }
    
    function dfs(node, requirementsMet, visited) {
        // Cycle detection
        if (visited.has(node)) {
            return 0;
        }
        
        const memoKey = getMemoKey(node, requirementsMet);
        if (memo.has(memoKey)) {
            return memo.get(memoKey);
        }
        
        const neighbors = findPath(map,node);
        if (!neighbors) {
            memo.set(memoKey, 0);
            return 0;
        }
        
        visited.add(node);
        
        // Check if current node satisfies any requirement
        const newRequirementsMet = new Set(requirementsMet);
        requiredNodes.forEach(req => {
            if (node === req) {
                newRequirementsMet.add(req);
            }
        });
        
        let count = 0;
        for (const neighbor of neighbors) {
            if (neighbor === "out") {
                // Check if all requirements are met
                if (newRequirementsMet.size === requiredNodes.length) {
                    count++;
                }
            } else {
                count += dfs(neighbor, newRequirementsMet, visited);
            }
        }
        
        visited.delete(node); // Backtrack
        memo.set(memoKey, count);
        return count;
    }
    
    return dfs(startNode, new Set(), new Set());
}
  
  



  const map = buildGraphMap(graph);
  const startPath = findPath(map,"svr");
  const ans=countPathsWithRequirementsMemoized(startPath,["dac","fft"]);
  console.log(ans);