
// https://exercism.org/tracks/javascript/exercises/pangram/edit

//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  sentence = sentence.toLowerCase();
  const s = new Set();

  for(let char of sentence){
    if(char >= 'a' && char <= 'z') s.add(char);
  }

  return s.size === 26;
};
