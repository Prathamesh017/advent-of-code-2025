const batteries = [987654321111111,
811111111111119,
234234234234278,
818181911112111];   
const fs = require("fs");


//https://leetcode.com/problems/remove-k-digits/. 
//Similar Product ,didn't get exact answer for all test cases for advent but worked for leetcode test cases
function loadRangesFromFile() {
  return fs.readFileSync("input.txt", "utf8")
    .trim()
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);
}


function getLeftMost(arr){
  let max=arr[0]
  let index=0;
   for(let i=1;i<arr.length;i++){
    let val=arr[i];
    if(val>max && i+11<=arr.length){
      max=val;
      index=i;
    }
  }
  // console.log(max,index)
  return {max,index}
}

//Simple Intution  
//if we want to find the smallest number after removing n digits , the number should be in inceeasing order  like 1279 , 
//same for decresing order for largest number 9876 , same logic applied
function getMaxNumber(num){
    let k=num.length - 0 -11;
      if(num.length===k){
     return "0";
   }
   
   let stack=[];
   stack.push(num[0])
   let left=1;
   while(left<num.length){
      let val=num[left];
      while(val>stack[stack.length-1] && stack.length>0 && k>0){
         stack.pop();
         k--
      }
      stack.push(val);
      left++
   }

   while (k > 0) {
    stack.pop();
    k--;
  }
   while (stack.length > 1 && stack[0] === "0") {
    stack.shift();
  }
   return stack.join("");
}
function finsMaxPower(batteries) {
    let sum=0;
    for (var i = 0; i < batteries.length; i++) {
    let battery = batteries[i].toString().split("");
    // let {max,index}=getLeftMost(battery);
    let maxNumber=getMaxNumber(battery);
    sum+=Number(maxNumber)
    console.log("final",maxNumber,maxNumber.toString().length)
    
    
  }
  return sum
    

    
}















const ans=finsMaxPower(loadRangesFromFile());
console.log(ans);