const batteries = [811111111111119];   
const fs = require("fs");

function loadRangesFromFile() {
  return fs.readFileSync("input.txt", "utf8")
    .trim()
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);
}

function getLeftMost(arr,index,skip){
  let max=arr[index]
   for(let i=index;i<arr.length;i++){
    if(skip===i)continue
    let val=arr[i];
    if(val>max){
      max=val;
      index=i;
    }
  }
  // console.log(max,index)
  return {max,index}
}
function finsMaxPower(batteries) {
    let sum=0;
    for (var i = 0; i < batteries.length; i++) {
    let battery = batteries[i].toString().split("");
    let {max,index}=getLeftMost(battery,0,-1);
    let leftMax=max;
    let rightMax=0;
    if(index===battery.length-1){
       let {max}=getLeftMost(battery,0,index);
       rightMax=leftMax;
       leftMax=max;
    }else{
       let {max}=getLeftMost(battery,index+1,-1);
       console.log(leftMax,max)
       rightMax=max;
    }
    console.log("final",leftMax,rightMax)
    sum+=10*Number(leftMax)+Number(rightMax)
    
  }
  return sum
    

    
}















const ans=finsMaxPower(batteries);
console.log(ans);