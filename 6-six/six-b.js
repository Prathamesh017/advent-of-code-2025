import { readFile } from "node:fs/promises";

const data = await readFile("input.txt", "utf8");
const rows = data
  .split(/\r?\n/)
  .filter(line => line.length > 0);

console.log(rows);
// console.log(rows[0].length);

function getAllOpIndexes(row){
    let indexes=[];
    for(let i=0;i<row.length;i++){
        if(row[i]==="+" || row[i]==="*"){
            indexes.push(i);
        }
    }
     indexes.push(row.length);
     return indexes;
}

function findSum(rows, start, end) {
  console.log(`Finding sum from column ${start} to ${end}`);
    let sum=0;
    let breadth=rows.length;
    let op=rows[breadth-1][start];
    let arr=[];
    for(let i=start;i<=end;i++){
        let numStr="";
        for(let j=0;j<breadth-1;j++){
            if(rows[j][i] !== " " && rows[j][i] !== "+" && rows[j][i] !== "*"){
                numStr+=rows[j][i];
            }
        }
        arr.push(numStr);
            }
        
    
        console.log(arr);

  if(op==="+"){
    sum=arr.reduce((acc, val) => acc + Number(val), 0);
  }else if(op==="*"){
    sum=arr.reduce((acc, val) => acc * Number(val), 1);  
  }
  console.log(sum)
  return sum;

}

function main(){
const opIndexes=getAllOpIndexes(rows[rows.length-1]);
console.log(opIndexes);
let totalSum=0;
for(let i=0;i<opIndexes.length-1;i++){
    let start=opIndexes[i];
    let end=i===opIndexes.length-2?rows[0].length-1:opIndexes[i+1]-2;
    let sum=findSum(rows, start, end);

    totalSum+=sum;
}
return totalSum;
}



console.log(main());

// console.log(rows.map(row => row.split("").map(c => c === " " ? "." : c).join("")).join("\n"));