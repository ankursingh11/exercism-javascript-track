// https://exercism.org/tracks/javascript/exercises/list-ops/edit

//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list = []) {
    this.values = list;
  }

  append(list) {
    this.values = [...this.values, ...list.values];
    return this;
  }

  concat(listOfLists) {
    for (let obj of listOfLists.values) {
      this.values = [...this.values, ...obj.values];
    }
    return this;
  }

  filter(cb) {
    const result = [];
    for (let i = 0; i < this.values.length; i++) {
      if (cb(this.values[i])) result.push(this.values[i]);
    }
    this.values = result;
    return this;
  }

  map(cb) {
    const result = [];
    for (let i = 0; i < this.values.length; i++) {
      result.push(cb(this.values[i]));
    }
    this.values = result;
    return this;
  }

  length() {
    return this.values.length;
  }

  foldl(cb, acc) {
    for (let i = 0; i < this.values.length; i++) {
      acc = cb(acc, this.values[i]);
    }
    return acc;
  }

  foldr(cb, acc) {
    for (let i = this.values.length - 1; i >= 0; i--) {
      acc = cb(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    let i = 0,
      j = this.values.length - 1;
    while (i < j) {
      [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
      i++;
      j--;
    }
    return this;
  }
}
