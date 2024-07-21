
// https://exercism.org/tracks/javascript/exercises/binary-search/edit

//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const find = (array, value) => {
  let len = array.length;
  if(len === 0) throw new Error("Value not in array");

  let start = 0, end = len-1;
  while(start <= end){
    let mid = Math.floor((start+end)/2);

    if(array[mid] === value) return mid;
    else if(array[mid] > value) end = mid-1;
    else start = mid+1;
  }

  throw new Error("Value not in array");
};
