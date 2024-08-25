
// https://exercism.org/tracks/javascript/exercises/anagram/edit

//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const sorted = (word) => {
  return Array.from(word).sort().join("");
}

export const findAnagrams = (word, wordList) => {
  const sortedWord = sorted(word.toLowerCase());
  const result = [];
  
  wordList.forEach(ele => {
    if(word.toLowerCase() === ele.toLowerCase()){
      return;
    }
    const sortedEle = sorted(ele.toLowerCase());
    if(sortedWord === sortedEle){
      result.push(ele);
    }
  })
  return result;
};