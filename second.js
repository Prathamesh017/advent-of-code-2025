const ranges = [
  "11-22",
  "95-115",
  "998-1012",
  "1188511880-1188511890",
  "222220-222224",
  "1698522-1698528",
  "446443-446449",
  "38593856-38593862",
  "565653-565659",
  "824824821-824824827",
  "2121212118-2121212124"
];
const fs = require('fs');


function loadRangesFromFile() {
  const data = fs.readFileSync('input.txt', "utf8");

  return data
    .replace(/\n/g, "")   // remove newlines
    .split(",")           // split by comma
    .map(r => r.trim())   // remove extra spaces
    .filter(Boolean);     // remove empty entries
}


function checkPatternsInRanges(start,end,arr) {
        console.log(`Checking range: ${start}-${end}`);
    for(let i = start; i <= end; i++) {
      let str = i.toString();
      if(str.length%2 !== 0) continue; // Skip if length is not even
      let left=0;
      let right=str.length/2;
      let found=true
      while(left<right && right<str.length){
        // console.log(str[left],str[right]);
            if(str[left]!==str[right]){
                found=false;
                break;
            }
            left++;
            right++;
      }
        if(found){
       
          arr.push(i);
        }
       
    }
}


function checkPatternsInRanges2(start,end,arr) {
        console.log(`Checking range: ${start}-${end}`);
    for(let i = start; i <= end; i++) {
        let map=new Map();
 
        let isPattern=false;
        for(let j=0;j<i.toString().length;j++){
            if(map.has(i.toString()[j])){
                let str=i.toString().slice(0,j);
                let left=j;
                let right=left+left;
                 if(right>i.toString().length){
        
                    break;
                 }
                 while(left<right && right<=i.toString().length){
                    let nextStr=i.toString().slice(left,right);
                    if(nextStr!=str){
                        isPattern=false;
                        break;
                    }

                    left=right;
                    right=left+str.length;
                 }
                 if(left === i.toString().length){
                    isPattern=true;
                    break;
                 }
            }
            else{
                map.set(i.toString()[j],j)
            }
        }
        if(isPattern){
            arr.push(i);
        }
            
       
    }
}


function countNumbersInRanges(ranges) {
const ans=[];
    for(let i = 0; i < ranges.length; i++) {
        let [start, end] = ranges[i].split('-').map(Number);
        checkPatternsInRanges2(start,end,ans);
    }
    return {ans,count:ans.reduce((a,b)=>a+b,0)};

}
const newRanges = loadRangesFromFile();
const {ans,count} = countNumbersInRanges(newRanges);
console.log(ans);
console.log(ans.length,count);