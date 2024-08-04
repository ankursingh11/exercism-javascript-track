// https://exercism.org/tracks/javascript/exercises/etl/edit

//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  const ans = {};
  for (let key in old) {
    for (let value of old[key]) {
      let newKey = value.toLowerCase();
      if (!ans[newKey]) ans[newKey] = +key;
    }
  }
  return ans;
};
