const grid = [
  ['.', '.', '@', '@', '.', '@', '@', '@', '@', '.'],
  ['@', '@', '@', '.', '@', '.', '@', '.', '@', '@'],
  ['@', '@', '@', '@', '@', '.', '@', '.', '@', '@'],
  ['@', '.', '@', '@', '@', '@', '.', '.', '@', '.'],
  ['@', '@', '.', '@', '@', '@', '@', '.', '@', '@'],
  ['.', '@', '@', '@', '@', '@', '@', '@', '.', '@'],
  ['.', '@', '.', '@', '.', '@', '.', '@', '@', '@'],
  ['@', '.', '@', '@', '@', '.', '@', '@', '@', '@'],
  ['.', '@', '@', '@', '@', '@', '@', '@', '@', '.'],
  ['@', '.', '@', '.', '@', '@', '@', '.', '@', '.']
];

const fs = require("fs");

function readGridFromFile() {
    const data = fs.readFileSync('input.txt', "utf8");

    // Split into rows, remove empty lines
    const rows = data
        .trim()
        .split(/\r?\n/)
        .filter(line => line.length > 0);

    // Convert each row string into an array of characters
    const grid = rows.map(row => row.split(""));

    return grid;
}

function checkPos(grid,row,col){
    let count=0;
    //top left
    if(row-1>=0 && col-1>=0 && grid[row-1][col-1]==='@'){
        count++;
    }
    //top
    if(row-1>=0 && grid[row-1][col]==='@'){
        count++;
    }
    //top right
    if(row-1>=0 && col+1<grid[0].length && grid[row-1][col+1]==='@'){
        count++;
    }

    //left
    if(col-1>=0 && grid[row][col-1]==='@'){
        count++;
    }
    //right
    if(col+1<grid[0].length && grid[row][col+1]==='@'){
        count++;
    }
    //bottom left
    if(row+1<grid.length && col-1>=0 && grid[row+1][col-1]==='@'){
        count++;
    }
    //bottom
    if(row+1<grid.length && grid[row+1][col]==='@'){
        count++;
    }
    //bottom right
    if(row+1<grid.length && col+1<grid[0].length && grid[row+1][col+1]==='@'){
        count++;
    }

    if(count<4){
        grid[row][col]='.';
    }
    return count<4
}

function main(grid,count){
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            let row=i;
            let col=j;
            if(grid[row][col]==='@' && checkPos(grid,row,col)){
                console.log(row,col)
                count++;
            }
        }
    }
    if(count>0){
        return count+main(grid,0);
    }
    return count;
    
}


const result=main(readGridFromFile(),0);
console.log(result);