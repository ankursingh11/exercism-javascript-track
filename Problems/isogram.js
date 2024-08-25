
// https://exercism.org/tracks/javascript/exercises/isogram/edit

//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  word = word.toLowerCase();
  const freqMap = {};
  for(let ele of word){
    if(ele === '-' || ele === ' ') continue;
    if(freqMap[ele] >= 1) return false;
    else{
      if(freqMap[ele]) freqMap[ele]+=1;
      else freqMap[ele] = 1;
    }
  }
  return true;
};
