
// https://exercism.org/tracks/javascript/exercises/protein-translation/edit

//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MAPPING = {
  "AUG" : "Methionine",
  "UUU" : "Phenylalanine",
  "UUC" : "Phenylalanine",
  "UUA" : "Leucine",
  "UUG" : "Leucine",
  "UCU" : "Serine",
  "UCC" : "Serine",
  "UCA" : "Serine",
  "UCG" : "Serine",
  "UAU" : "Tyrosine",
  "UAC" : "Tyrosine",
  "UGU" : "Cysteine",
  "UGC" : "Cysteine",
  "UGG" : "Tryptophan",
  "UAA" : "STOP",
  "UAG" : "STOP",
  "UGA" : "STOP"
}

const STOP = "STOP";

export const translate = (sequence) => {
  const polypeptides = [];
  if(!sequence) return polypeptides;
  const arr = Array.from(sequence);
  let len = arr.length;
  let i = 0;
  
  while(i < arr.length){
    const codon = MAPPING[arr.splice(0, 3).join("")];
    if(!codon){
      throw new Error("Invalid codon");
    } 
    if(codon !== STOP){
      polypeptides.push(codon);
    }else break;
  }
  return polypeptides;
};