
// https://exercism.org/tracks/javascript/exercises/resistor-color-duo/edit

//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const decodedValue = (colors) => {
  let ans = "";
  for(let i = 0; i < 2; i++){
    ans = ans + String(COLORS.indexOf(colors[i]));
  }
  return Number(ans);
};


