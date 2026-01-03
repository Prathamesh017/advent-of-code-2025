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


function readValuesFromFile() {
  const values = fs.readFileSync('input.txt', "utf8")
    .trim()
    .split(/\r?\n/)
    .filter(Boolean)
    .map(Number);

  return values;
}
const values = [1, 5, 8, 11, 17, 32];

function findValuesInRanges(ranges, values) {

    let count=0;

    for(let i=0;i<values.length;i++){
        let val=values[i];
        for(let j=0;j<ranges.length;j++){
            let [start,end]=ranges[j];
            if(val>=start && val<=end){
                console.log(val)
                count++;
                break;
            }
        

        }}
    return count;
}



const result = findValuesInRanges(readRangesFromFile(), readValuesFromFile());
console.log(result); // Expected output: 4