import fs from "fs";

const data = fs.readFileSync("input.txt", "utf8");
const lines = data.trim()
  .split(/\r?\n/)                 // split into lines
  .map(line =>
    line
      .trim()
      .split("")               // split by one or more spaces           // convert to numbers
  );
//   console.log(lines)


function getStartingIndex(lines){
  const index=lines[0].findIndex((val)=>{return val==='S'})
  return index;
}

//MY Solution - Not Scalable
function getBeamsMapped(lines){
let finalTimelines=[getStartingIndex(lines)];
for(let i=0;i<lines.length;i++){
    let nextTimeLine=[];
    for(let j=0;j<finalTimelines.length;j++){
        let val=lines[i][finalTimelines[j]];
        const col = finalTimelines[j];
        if(val==="^"){
             if (col - 1 >= 0) nextTimeLine.push(col - 1);
  if (col + 1 < lines[i].length) nextTimeLine.push(col + 1);
        }else{
            nextTimeLine.push(finalTimelines[j]);
        }
    }
    finalTimelines=nextTimeLine;

}
console.log(finalTimelines);
    return finalTimelines.length

}


//GPT Solution of the same version , scalable
function getBeamsMapped(lines) {
  let timelines = new Map();
  timelines.set(getStartingIndex(lines), 1);

  for (let i = 0; i < lines.length; i++) {
    const next = new Map();

    for (const [col, count] of timelines) {
      const cell = lines[i][col];

      if (cell === "^") {
        if (col - 1 >= 0) {
          next.set(col - 1, (next.get(col - 1) || 0) + count);
        }
        if (col + 1 < lines[i].length) {
          next.set(col + 1, (next.get(col + 1) || 0) + count);
        }
      } else {
        next.set(col, (next.get(col) || 0) + count);
      }
    }

    timelines = next;
  }

  // sum all timeline counts
  let total = 0;
  for (const count of timelines.values()) {
    total += count;
  }

  return total;
}


const mappedBeams=getBeamsMapped(lines);
console.log(mappedBeams)





