// https://exercism.org/tracks/javascript/exercises/flatten-array/edit

//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (list) => {
  const result = [];
  for (let ele of list) {
    if (Array.isArray(ele)) {
      result.push(...flatten(ele));
    } else if (ele != null || ele != undefined) result.push(ele);
  }

  return result;
};
