// https://exercism.org/tracks/javascript/exercises/wordy/edit

//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (question) => {
  const q = [];
  question
    .toLowerCase()
    .replace(/(what|is|by|\?)/g, "")
    .split(" ")
    .forEach((word) => {
      if (word.match(/[0-9]+/)) q.push(Number(word));
      else if (word.match(/plus/)) q.push("+");
      else if (word.match(/minus/)) q.push("-");
      else if (word.match(/multi/)) q.push("*");
      else if (word.match(/divide/)) q.push("/");
      else if (word.length) {
        throw new Error("Unknown operation");
      }
    });

  if (!q.length) {
    throw new Error("Syntax error");
  }

  let result = q.shift();
  while (q.length) {
    let el = q.shift();
    let nextNum = q.shift();

    if (typeof nextNum !== "number") throw new Error("Syntax error");
    else if (el === "+") result += nextNum;
    else if (el === "-") result -= nextNum;
    else if (el === "*") result *= nextNum;
    else if (el === "/") result /= nextNum;
    else {
      throw new Error("Syntax error");
    }
  }
  return result;
};
