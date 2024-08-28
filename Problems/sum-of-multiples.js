
// https://exercism.org/tracks/javascript/exercises/sum-of-multiples/edit

//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const findMultiples = (num, level) => {
  let curr = num;
  const result = [];
  while(curr < level && curr> 0){
    result.push(curr);
    curr += num;
  }
  return result;
}

export const sum = (arr, level) => {
  
  const multiples = [];
  while(arr.length > 0){
    let num = arr.shift();
    multiples.push(findMultiples(num, level));
  }
  const st = new Set();
  multiples.forEach(arr => arr.forEach(ele => st.add(ele)));
  let result = Array.from(st).reduce((curr, ele) => curr + ele, 0);
  return result;
};

