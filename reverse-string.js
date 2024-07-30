
// https://exercism.org/tracks/javascript/exercises/reverse-string/edit

//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  if(str === '') return str;
  let ans = Array.from(str).reverse().join('');
  return ans;
};
