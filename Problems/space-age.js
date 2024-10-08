
// https://exercism.org/tracks/javascript/exercises/space-age/edit

//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const PLANET_TO_ORBITAL_PERIOD_MAPPING = {
  "mercury" : 0.2408467,
  "venus" : 0.61519726,
  "earth" : 1,
  "mars" : 1.8808158,
  "jupiter" : 11.862615,
  "saturn" : 29.447498,
  "uranus" : 84.016846,
  "neptune" : 164.79132
}

const EARTH_ORBITAL_PERIOD_SECONDS = 31557600;

export const age = (planet, time) => {
  let result = (time/(PLANET_TO_ORBITAL_PERIOD_MAPPING[planet]*EARTH_ORBITAL_PERIOD_SECONDS));
  result = parseFloat(result.toFixed(2))
  return result;
};
