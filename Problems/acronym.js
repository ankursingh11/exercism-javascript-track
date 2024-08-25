
// https://exercism.org/tracks/javascript/exercises/acronym/edit

//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (str) => {
  let ans = "";
  str.replace(/[_-]/g, " ").split(" ").filter(ele => ele !== "").forEach(ele => {
      ans = ans + ele[0].toUpperCase();
  });
  return ans;
};
