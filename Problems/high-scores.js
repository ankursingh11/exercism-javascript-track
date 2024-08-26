
// https://exercism.org/tracks/javascript/exercises/high-scores/edit

export class HighScores {
  constructor(arr) {
    this.arr = arr;
    this.maxEle = Math.max(...this.arr);
    this.topThree = [...this.arr].sort((a, b) => a-b).slice(-3).reverse();
  }

  get scores() {
    return this.arr;
  }

  get latest() {
    return this.arr[this.arr.length-1];
  }

  get personalBest() {
    return this.maxEle;
  }

  get personalTopThree() {
    return this.topThree;
  }
}