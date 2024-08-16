// https://exercism.org/tracks/javascript/exercises/diamond/edit

//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function asciiToChar(asciiValue) {
  return String.fromCharCode(asciiValue);
}

const addSpaces = (sp, row) => {
  let j = 0;
  while (j < sp) {
    row += " ";
    j++;
  }
  return row;
};

function findUpperTriangle(n) {
  const upperTriangle = [];

  for (let i = 0; i < n; i++) {
    let row = "";
    let sp = n - i - 1;
    row = addSpaces(sp, row);
    row += asciiToChar(65 + i);
    let betweenSp = 2 * i - 1;
    row = addSpaces(betweenSp, row);
    if (i != 0) row += asciiToChar(65 + i);
    row = addSpaces(sp, row);
    upperTriangle.push(row);
  }
  return upperTriangle;
}

function findLowerTriangle(...arr) {
  arr.pop();
  arr.reverse();
  return arr;
}

export const rows = (char) => {
  const n = char.charCodeAt(0) - "A".charCodeAt(0) + 1;

  const upperTriangle = findUpperTriangle(n);
  const lowerTriangle = findLowerTriangle(...upperTriangle);

  const ans = [...upperTriangle, ...lowerTriangle];
  return ans;
};
