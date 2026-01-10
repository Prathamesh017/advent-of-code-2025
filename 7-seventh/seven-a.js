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

  for(let i=0;i<lines.length;i++){
    for(let j=0;j<lines[i].length;j++){
        const val=lines[i][j];
        if(val==="S"){
            lines[i+1][j]="|";
        }else if(val ==="|"){
            if(i+1<lines.length && lines[i+1][j]==="."){
                lines[i+1][j]="|";
            }else if(i+1<lines.length && lines[i+1][j]==="^"){
                  if(i+1<lines.length && j-1>=0){
                   lines[i+1][j-1]="|";
                  }
                if(i+1<lines.length && j+1<lines[i+1].length){
                    lines[i+1][j+1]="|";
            }
            }
        }


    }
  }

let count=0;
   for(let i=0;i<lines.length;i++){
    for(let j=0;j<lines[i].length;j++){
        const val=lines[i][j];
        if(val==="^" && lines[i-1][j]==="|"){
            count++;
        }

    }
  }

  console.log(count)

