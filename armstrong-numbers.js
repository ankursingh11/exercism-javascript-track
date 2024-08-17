
// https://exercism.org/tracks/javascript/exercises/armstrong-numbers/edit

//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  const n = Array.from(num.toString()).length;
  let numCopy = num;
  let sum = 0;
  while(numCopy != 0){
    sum += Math.pow(numCopy%10, n);
    numCopy = Math.floor(numCopy/10);
  }
  return sum === num;
};
