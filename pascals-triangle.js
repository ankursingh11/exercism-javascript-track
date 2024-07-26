// https://exercism.org/tracks/javascript/exercises/pascals-triangle/edit

//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if (n === 0) return [];

  const result = Array(5).fill();

  for (let i = 0; i < n; i++) {
    result[i] = Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j] + result[i - 1][j - 1];
    }
  }
  return result;
};
