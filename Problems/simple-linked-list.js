
// https://exercism.org/tracks/javascript/exercises/simple-linked-list/edit

//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(data) {
    this._value = data;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }
}

export class List {
  constructor(listOfNums = []) {
    this._head = null;
    this._length = 0;

    for (let num of listOfNums) {
      let ele = new Element(num);
      this.add(ele);
    }
  }

  add(nextValue) {
    if (!this._head) {
      this._head = nextValue;
    } else {
      nextValue._next = this._head;
      this._head = nextValue;
    }
    this._length++;
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    let curr = this._head;
    // console.log(curr._value);
    const result = [];
    if (this._length === 1) {
      result.push(curr._value);
    } else {
      while (curr._next) {
        result.push(curr._value);
        curr = curr._next;
      }
      result.push(curr._value);
    }
    return result;
  }

  reverse() {
    let curr = this._head;
    let fwd = null,
      prev = null;
    while (curr) {
      fwd = curr._next;
      curr._next = prev;
      prev = curr;
      curr = fwd;
    }
    this._head = prev;
    return this;
  }
}
