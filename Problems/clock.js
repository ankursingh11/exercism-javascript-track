// https://exercism.org/tracks/javascript/exercises/clock/edit

//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MINS = 60;
const HOURS = 24;

export class Clock {
  constructor(hr, min) {
    min = min === undefined ? 0 : min;
    let totalMins = hr * 60 + min ?? 0;
    while (totalMins < 0) totalMins = HOURS * MINS + totalMins;
    this.totalMins = totalMins;
    this.hour = this.findHours();
    this.mins = this.findMins();
  }

  findHours() {
    let hours = Math.floor(this.totalMins / MINS);
    if (hours >= 24) hours = hours % HOURS;
    return hours;
  }

  findMins() {
    return this.totalMins % MINS;
  }

  toString() {
    const result =
      this.hour.toString().padStart(2, 0) +
      ":" +
      this.mins.toString().padStart(2, 0);
    return result;
  }

  plus(mins) {
    this.totalMins += mins;
    this.hour = this.findHours();
    this.mins = this.findMins();
    return this;
  }

  minus(mins) {
    this.totalMins -= mins;
    while (this.totalMins < 0) this.totalMins = HOURS * MINS + this.totalMins;
    this.hour = this.findHours();
    this.mins = this.findMins();
    return this;
  }

  equals(c1) {
    return c1.hour === this.hour && c1.mins === this.mins;
  }
}
