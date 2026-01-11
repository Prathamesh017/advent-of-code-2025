import fs from "fs";
// const arr = [
//   [7, 1],
//   [11, 1],
//   [11, 7],
//   [9, 7],
//   [9, 5],
//   [2, 5],
//   [2, 3],
//   [7, 3]
// ];

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



function getDistance(x1,x2,y1,y2){
    let a=Math.abs(x1-y1)+1;
    let b=Math.abs(x2-y2)+1;
    return a*b;

}


function findMaxArea(pairs){
    let max=0
    for(let i=0;i<pairs.length;i++){
        let [index1,index2]=pairs[i];
        for(let j=i+1;j<pairs.length;j++){
            let [index3,index4]=pairs[j];
            const distance=getDistance(index1,index2,index3,index4);
            max=Math.max(max,distance)
        }
    }
    return max
}

const ans=findMaxArea(arr)
console.log(ans);