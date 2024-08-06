// https://exercism.org/tracks/javascript/exercises/nucleotide-count/edit

//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  const count = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };
  const nucleotides = ["A", "C", "G", "T"];
  for (let ele of strand) {
    if (nucleotides.includes(ele)) {
      count[ele] += 1;
    } else {
      throw new Error("Invalid nucleotide in strand");
    }
  }
  let ans = "";
  for (const ele of nucleotides) {
    ans += count[ele] + " ";
  }
  ans = ans.trim();
  return ans;
}
