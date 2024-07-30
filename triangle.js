// https://exercism.org/tracks/javascript/exercises/triangle/edit

//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    [this.a, this.b, this.c] = sides;
  }

  checkTriangle() {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) return false;
    return (
      this.a + this.b > this.c &&
      this.b + this.c > this.a &&
      this.c + this.a > this.b
    );
  }

  get isEquilateral() {
    if (!this.checkTriangle(this.a, this.b, this.c)) return false;
    return this.a === this.b && this.b === this.c && this.c === this.a;
  }

  get isIsosceles() {
    if (!this.checkTriangle(this.a, this.b, this.c)) return false;

    return this.a === this.b || this.b === this.c || this.c === this.a;
  }

  get isScalene() {
    if (!this.checkTriangle(this.a, this.b, this.c)) return false;
    return this.a !== this.b && this.b !== this.c && this.c !== this.a;
  }
}
