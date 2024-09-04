
// https://exercism.org/tracks/javascript/exercises/minesweeper/edit

const MINE = '*';
const di = [0, -1, -1, -1, 0, 1, 1, 1];
const dj = [-1, -1, 0, 1, 1, 1, 0, -1];

const validPoints = (i, j, rows, cols) => i >= 0 && i < rows && j >= 0 && j < cols;

const checkNeighbourHasMines = (arr, i, j) => {
  
  const rows = arr.length;
  const cols = arr[0].length; 
  let count = 0;
  
  for(let k = 0; k < 8; k++){
    const newi = i + di[k];
    const newj = j + dj[k];
    if(validPoints(newi, newj, rows, cols) && arr[newi][newj] === MINE) count++;
  }
  return count;
}

export const annotate = (input) => {

  let output = input.map(ele => Array.from(ele));
  
  for(let i = 0; i < output.length; i++){
    for(let j = 0; j < output[i].length; j++){
      if(output[i][j] === " "){
        const mineCount = checkNeighbourHasMines(output, i, j);
        if(mineCount === 0) output[i][j] = " ";
        else output[i][j] = mineCount;
      }
    }
  }
  output = output.map(ele => ele.join(''));
  return output;
};