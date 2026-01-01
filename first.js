function getMoves() {
    const fs = require('fs');
    const data = fs.readFileSync('input.txt', 'utf8');
    const moves = data.trim() .split('\n');
    return moves;
}
const moves = [
 
  "L68",
  "L30",
  "R48",
  "L5",
  "R60",
  "L55",
  "L1",
  "L99",
  "R14",
  "L82"

];

function getFinalPosition(moves) {
    let curr=50
    let zeros=0;
    for(let i=0;i<moves.length;i++){
        let dir=moves[i].split('')[0];
        let step=parseInt(moves[i].split('').slice(1).join(''))
        let steps=step % 100;
        if(dir==='L'){
            if(curr-steps>=0){
              curr-=steps;
            }else{
              curr=100 -(steps-curr);
              if(curr===0){
                zeros==step>100?zeros+Math.ceil(step/100):zeros+1
              }else if(step>100){
                zeros=zeros+Math.floor(step/100)
              }else{
              zeros++
              }
            }  
            
            
        }else{
          if(curr+steps<=99){
              curr+=steps;
            }else{
             curr=(curr+steps)-100;
              if(curr===0){
                zeros==step>100?zeros+Math.ceil(step/100):zeros+1
              }else if(step>100){
                zeros=zeros+Math.floor(step/100)
              }else{
              zeros++
            }
            }
            
        }
         console.log(curr,dir,steps)
    }
    return zeros    

}


function getFinalPosition2(moves) {
    let curr=50
    let zeros=0;
    for(let i=0;i<moves.length;i++){
        let dir=moves[i].split('')[0];
        let step=parseInt(moves[i].split('').slice(1).join(''))
        let steps=step % 100;
        zeros=zeros+Math.floor(step/100);
        if(dir==='L'){
            if(curr-steps>=0){
              curr-=steps;
            }else{
               curr = curr - steps + 100;
            //   if(step<100){
                zeros++
            //   }
            }
            
        }else{
          if(curr+steps<=99){
              curr+=steps;
            }else{
             curr=(curr+steps)-100;
            //  if(step<100){
                zeros++
            //   }
            
        }
        }
         console.log(curr,dir,steps)
    }
    return zeros    

}


  
const ans=getFinalPosition2(getMoves());
console.log(ans)