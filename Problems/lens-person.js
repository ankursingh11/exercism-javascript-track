
// https://exercism.org/tracks/javascript/exercises/lens-person/edit

//
// This is only a SKELETON file for the 'Lens Person' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/* eslint-disable no-unused-vars */
import { Person } from './person';
import { Name } from './name';
import { Born } from './born';
import { Address } from './address';
import { Lens } from './lens';

// Implement the nameLens with the getter and setter
export const nameLens = new Lens(
  (person) => {
    return person.name
  },
  (person, name) => {
    return new Person(name, person.born, person.address)
  },
);

// Implement the bornAtLens with the getter and setter
export const bornAtLens = new Lens(
  (person) => {
    return person.born.bornAt;
  },
  (person, born) => {
    return new Person(person.name, born, person.address)
  },
);

// Implement the streetLens with the getter and setter
export const streetLens = new Lens(
  (person) => {
    return person.address.street
  },
  (person, address) => {
    return new Person(person.name, person.born, address)
  },
);