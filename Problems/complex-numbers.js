// https://exercism.org/tracks/javascript/exercises/complex-numbers/edit

//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(a, b) {
    this.realNumber = a;
    this.imagNumber = b;
  }

  get real() {
    return this.realNumber;
  }

  get imag() {
    return this.imagNumber;
  }

  add(c1) {
    this.realNumber = this.realNumber + c1.realNumber;
    this.imagNumber = this.imagNumber + c1.imagNumber;
    return this;
  }

  sub(c1) {
    this.realNumber = this.realNumber - c1.realNumber;
    this.imagNumber = this.imagNumber - c1.imagNumber;
    return this;
  }

  div(c1) {
    let nr = this.mul(c1.conj);
    let dr = c1.abs * c1.abs;
    this.realNumber = nr.realNumber / dr;
    this.imagNumber = nr.imagNumber / dr;
    return this;
  }

  mul(c1) {
    let real =
      this.realNumber * c1.realNumber - this.imagNumber * c1.imagNumber;
    let imag =
      this.realNumber * c1.imagNumber + this.imagNumber * c1.realNumber;
    this.realNumber = real;
    this.imagNumber = imag;
    return this;
  }

  get abs() {
    let absValue = Math.sqrt(
      this.realNumber * this.realNumber + this.imagNumber * this.imagNumber
    );
    return absValue;
  }

  get conj() {
    this.imagNumber = -this.imagNumber;
    if (this.imagNumber === -0) this.imagNumber = 0;
    return this;
  }

  get exp() {
    const expA = Math.exp(this.real);
    return new ComplexNumber(
      expA * Math.cos(this.imag),
      Math.floor(expA * Math.sin(this.imag))
    );
  }
}
