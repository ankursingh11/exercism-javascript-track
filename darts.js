
// https://exercism.org/tracks/javascript/exercises/darts/edit

//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x = 0, y = 0) => {
  const dist = x**2 + y**2;
  return (dist > 100) ? 0 : (dist > 25) ? 1 : (dist > 1) ? 5 : 10;
};
