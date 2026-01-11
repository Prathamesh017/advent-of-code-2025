import fs from "fs";
const arr = [
  [7, 1],
  [11, 1],
  [11, 7],
  [9, 7],
  [9, 5],
  [2, 5],
  [2, 3],
  [7, 3]
];

///! 

const input = fs.readFileSync("input.txt", "utf8");
// const arr = input
//   .trim()
//   .split("\n")              // split into lines
//   .map(line =>
//     line
//       .trim()
//       .split(",")           // split X,Y,Z
//       .map(Number)          // convert to numbers
//   );



function getDistance(x1,x2,y1,y2){
    let a=Math.abs(x1-y1)+1;
    let b=Math.abs(x2-y2)+1;
    return a*b;

}
function findLengthBreadth(){
    let length=0;
    let breadth=0;
    for(let i=0;i<arr.length;i++){
        let [x,y]=arr[i];
        length=Math.max(length,x);
        breadth=Math.max(breadth,y);
    }
    return {length,breadth}
}

function markValidArea(pairs){
 const {length,breadth}=findLengthBreadth();
    const arr=new Array(breadth+1).fill('0').map(() => new Array(length+1).fill('0'));
   for(let i=0;i<pairs.length;i++){
       let [x1,y1]=pairs[i];
        arr[y1][x1]='#'
   }

   //marking green
    for(let i=0;i<pairs.length-1;i++){
       let [x1,y1]=pairs[i];
       let [x2,y2]=pairs[i+1];
       if(y1===y2){
          let small=x1<x2?x1:x2;
          let big=x1<x2?x2:x1;
           for(let j=small+1;j<big;j++){
               arr[y1][j]='X'
           }
       }else{
            let small=y1<y2?y1:y2;
            let big=y1<y2?y2:y1;
           for(let j=small+1;j<big;j++){
               arr[j][x1]='X'
           }
       }
   }

   //handling wrap
       let [x1,y1]=pairs[0];
       let [x2,y2]=pairs[pairs.length-1];
       if(y1===y2){
          let small=x1<x2?x1:x2;
          let big=x1<x2?x2:x1;
           for(let j=small+1;j<big;j++){
               arr[y1][j]='X'
           }
       }else{
            let small=y1<y2?y1:y2;
            let big=y1<y2?y2:y1;
           for(let j=small+1;j<big;j++){
               arr[j][x1]='X'
           }
       }
    
   //marking all non-boundaries
   const newArr=marknonBoundariesAll(arr);
   console.log(newArr);
   for(let i=0;i<newArr.length;i++){
       for(let j=0;j<newArr[0].length;j++){
           if(newArr[i][j]==='0'){
               newArr[i][j]='X'
           }
       }
   }
//    console.log(newArr);
   //


}
function marknonBoundariesAll(arr){
    //checking from top to bottom
    for(let i =0;i<arr[0].length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j][i]==='0' || arr[j][i]==='.'){
                arr[j][i]='.'
            }else{
                break;
            }
        }
    }

    //checking from left to right
     for(let i =0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            if(arr[i][j]==='0' || arr[i][j]==='.'){
                arr[i][j]='.'
            }else{
                break;
            }
        }
    }
    return arr;

}
function validPair(arr,x1,x2,y1,y2){
    //have to conver for 4 directions
    //left to right
    let left=y1>x1?x1:y1;
    let right=y1>x1?y1:x1;
    for(let i=left;i<=right;i++){
        if(arr[y2][i]==='.'){
            return false;
        }
    }


}

function findMaxArea(pairs){
   const arr=markValidArea(pairs);

}

const ans=findMaxArea(arr)
// console.log(ans);