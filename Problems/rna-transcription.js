
// https://exercism.org/tracks/javascript/exercises/rna-transcription/edit

//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DNA_RNA_MAPPING = {
  'G' : 'C',
  'C' : 'G',
  'T' : 'A',
  'A' : 'U'
}

export const toRna = (dna) => {
  let result = "";
  for(let i = 0; i < dna.length; i++){
    result = result + DNA_RNA_MAPPING[dna[i]];
  }
  return result;
};
