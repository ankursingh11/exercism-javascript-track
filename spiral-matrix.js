// https://exercism.org/tracks/javascript/exercises/spiral-matrix/edit

//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (n) => {
  const arr = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let totalElements = n * n;
  let count = 1;

  while (count <= totalElements) {
    for (
      let i = startCol;
      i <= endCol && count <= totalElements;
      i++, count++
    ) {
      arr[startRow][i] = count;
    }
    startRow++;

    for (
      let i = startRow;
      i <= endCol && count <= totalElements;
      i++, count++
    ) {
      arr[i][endCol] = count;
    }
    endCol--;

    for (
      let i = endCol;
      i >= startCol && count <= totalElements;
      i--, count++
    ) {
      arr[endRow][i] = count;
    }
    endRow--;

    for (
      let i = endRow;
      i >= startRow && count <= totalElements;
      i--, count++
    ) {
      arr[i][startCol] = count;
    }
    startCol++;
  }
  return arr;
};
