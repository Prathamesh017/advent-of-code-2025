const ranges = [
  [3, 5],
  [10, 14],
  [16, 20],
  [12, 18]
];

import fs from 'fs';

function readRangesFromFile() {
  const lines = fs.readFileSync('range.txt', "utf8")
    .trim()
    .split(/\r?\n/)
    .filter(Boolean);

  const ranges = lines.map(line => {
    const [start, end] = line.split("-").map(Number);
    return [start, end];
  });

  return ranges;
}

//merge overlapping ranges and calculate total unique integers covered
function findTotol(ranges){
    let total=0;
    //sorting first 
    ranges.sort((a, b) => a[0] - b[0]);

    let currentStart=ranges[0][0];
    let currentEnd=ranges[0][1];

    for(let i=0;i<ranges.length;i++){
        let [start,end]=ranges[i];
        
        //check for overlap
        if(start<=currentEnd){
            //merge ranges as the new range can exceed the previous end or can be within the previous start-end
            currentEnd=Math.max(currentEnd,end);
        }else{
            //no overlap, add the previous range to total
            total+=currentEnd-currentStart+1;
            //update current range
            currentStart=start;
            currentEnd=end;
        }

        if(i===ranges.length-1){
            total+=currentEnd-currentStart+1;
        }

    }
    return total;
}
const result = findTotol(readRangesFromFile());
console.log(result); // Expected output: 16