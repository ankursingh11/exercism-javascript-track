// https://exercism.org/tracks/javascript/exercises/run-length-encoding/edit

//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => {
  if (str.length === 0) return "";

  let curr = str[0];
  let count = 1;
  let ans = "";

  for (let i = 1; i < str.length; i++) {
    if (str[i] === curr) count++;
    else {
      if (count > 1) ans += count + curr;
      else ans += curr;

      curr = str[i];
      count = 1;
    }
  }
  if (count > 1) ans += count + curr;
  else ans += curr;

  return ans;
};

export const decode = (str) => {
  if (str.length === 0) return "";

  let count = "";
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "1" && str[i] <= "9") {
      count += str[i];
    } else {
      let currCount = +count;
      if (currCount > 0) {
        while (currCount--) ans += str[i];
      } else ans += str[i];
      count = "";
    }
  }
  return ans;
};
