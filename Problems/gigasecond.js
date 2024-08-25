
// https://exercism.org/tracks/javascript/exercises/gigasecond/edit

//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGA = 1e12;

export const gigasecond = (inputDate) => {
  return new Date(inputDate.getTime() + GIGA);
};
