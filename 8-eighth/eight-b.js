// const arr = [
//   [162, 817, 812],
//   [57, 618, 57],
//   [906, 360, 560],
//   [592, 479, 940],
//   [352, 342, 300],
//   [466, 668, 158],
//   [542, 29, 236],
//   [431, 825, 988],
//   [739, 650, 466],
//   [52, 470, 668],
//   [216, 146, 977],
//   [819, 987, 18],
//   [117, 168, 530],
//   [805, 96, 715],
//   [346, 949, 466],
//   [970, 615, 88],
//   [941, 993, 340],
//   [862, 61, 35],
//   [984, 92, 344],
//   [425, 690, 689]
// ];
//Could not resolve

import fs from "fs";
const input = fs.readFileSync("input.txt", "utf8");

const arr = input
  .trim()
  .split("\n")              // split into lines
  .map(line =>
    line
      .trim()
      .split(",")           // split X,Y,Z
      .map(Number)          // convert to numbers
  );
const pairs = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    pairs.push([i, j]);
  }
}

function getDistance(){
    for(let i=0;i<pairs.length;i++){
        let [index1,index2]=pairs[i];
        let [x1,y1,z1]=arr[index1];
        let [x2,y2,z2]=arr[index2];
        let distance =
         Math.sqrt(
        (x1 - x2) ** 2 +
        (y1 - y2) ** 2 +
        (z1 - z2) ** 2
      );
        pairs[i].push(distance);
        
    }

    pairs.sort((a,b)=>{
        return a[2]-b[2]
    })
   
}
function findMatchingBoxes(pairs) {
    // console.log(pairs)
    getDistance()    
  let groups = [];
  let count=0;
  let lastA=-1
  let lastB=-1
  for (let [a, b] of pairs) {
    let found = [];

    for (let i = 0; i < groups.length; i++) {
      if (groups[i].includes(a) || groups[i].includes(b)) {
        found.push(i);
      }
    }

    // Case 1: neither found
    if (found.length === 0) {
      groups.push([a, b]);
      count++
    }

    // Case 2: exactly one group found
    else if (found.length === 1) {
      let g = groups[found[0]];
      if (!g.includes(a)) g.push(a);
      if (!g.includes(b)) g.push(b);
      count++
    }

    // Case 3: two groups found → merge
    else {
      let g1 = groups[found[0]];
      let g2 = groups[found[1]];
      lastA=a;
      lastB=b;

      let merged = [...new Set([...g1, ...g2, a, b])];

      // remove higher index first
      groups.splice(found[1], 1);
      groups.splice(found[0], 1);

      groups.push(merged);
      count++
    }
    
  }

console.log(arr[lastA][0] * arr[lastB][0])
const ans=[];
  for(let i=0;i<groups.length;i++){
         let grp=groups[i];
         ans.push(grp.length);
       
  }

  ans.sort((a,b)=>b-a);
  return ans[0]*ans[1]*ans[2];
  
//    for( let a of set){
//     counts*=a;
//    }
  

//   console.log(groups);
}




const ans=findMatchingBoxes(pairs)
console.log(ans);
// console.log(pairs)

