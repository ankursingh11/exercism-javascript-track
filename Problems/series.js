// https://exercism.org/tracks/javascript/exercises/series/edit

//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if (series.length === 0) {
      throw new Error("series cannot be empty");
    }
    this.arr = Array.from(series).map((ele) => +ele);
  }

  validate(sliceLength) {
    if (sliceLength > this.arr.length) {
      throw new Error("slice length cannot be greater than series length");
    }
    if (sliceLength === 0) {
      throw new Error("slice length cannot be zero");
    }
    if (sliceLength < 0) {
      throw new Error("slice length cannot be negative");
    }
  }

  slices(sliceLength) {
    this.validate(sliceLength);

    const ans = [];
    for (let i = 0; i < this.arr.length - sliceLength + 1; i++) {
      ans.push(this.arr.slice(i, i + sliceLength));
    }
    return ans;
  }
}

console.log(new Series("918493904243").slices(5));
