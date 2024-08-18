
// https://exercism.org/tracks/javascript/exercises/difference-of-squares/edit

export class Squares {
  constructor(n) {
    this.squareSum = Math.pow((n*(n+1))/2, 2);
    this.sumSquare = (n*(n+1)*(2*n+1))/6;
  }

  get sumOfSquares() {
    return this.sumSquare;
  }

  get squareOfSum() {
    return this.squareSum;
  }

  get difference() {
    return (this.squareSum - this.sumSquare);
  }
}