function getMoves() {
    const fs = require('fs');
    const data = fs.readFileSync('input1.txt', 'utf8');
    const moves = data.trim() .split('\n');
    return moves;
}
const moves = [
  "R250",
  "L175",
  "R325",
  "L100",
  "R75"
];

function getFinalPosition(moves) {
    let curr=50
    let zeros=0;
    for(let i=0;i<moves.length;i++){
        let dir=moves[i].split('')[0];
        let steps=parseInt(moves[i].split('').slice(1).join('')) % 100;
        if(dir==='L'){
            if(curr-steps>=0){
              curr-=steps;
            }else{
              curr=100 -(steps-curr);
            }  
            if(curr===0){
              zeros++
            }
            
        }else{
          if(curr+steps<=99){
              curr+=steps;
            }else{
             curr=(curr+steps)-100;

            }
            if(curr===0){
              zeros++
            }
        }
         console.log(curr,dir,steps)
    }
    return zeros    

}

  
const ans=getFinalPosition(getMoves());
console.log(ans)