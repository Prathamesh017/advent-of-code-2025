import { readFile } from "node:fs/promises";

const data = await readFile("input.txt", "utf8");
const lines = data.trim()
  .split(/\r?\n/)                 // split into lines
  .map(line =>
    line
      .trim()
      .split(/\s+/)               // split by one or more spaces
      .map(token => {
  const n = Number(token);
  return Number.isNaN(n) ? token : n;
})              // convert to numbers
  );

let size=lines[0].length;
let breadth=lines.length;
let totalSum=0
for(let i=0;i<size;i++){
   let isSum=lines[breadth-1][i]==="+"?true:false;
    let sum=isSum?0:1;
  for(let j=0;j<breadth-1;j++){

        if(isSum){
            sum+=lines[j][i];
        }else{
            sum*=lines[j][i];
        }
    }
    totalSum+=sum;
}
console.log(totalSum);

