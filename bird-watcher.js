
// https://exercism.org/tracks/javascript/exercises/bird-watcher/edit

// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {

  const totalBirds = birdsPerDay.reduce((acc, bird)=>{
    return acc+bird; 
  }, 0);

  return totalBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {

  let startingIndex = (week-1)*7;
  let endingIndex = week*7;
  
  let ans = 0;
  for(let i = startingIndex; i < endingIndex; i++){
    ans = ans + birdsPerDay[i];
  }
  return ans;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {

  for(let i = 0; i < birdsPerDay.length; i++){
    if(i%2 === 0){
      birdsPerDay[i] = birdsPerDay[i]+1;
    }
  }

  return birdsPerDay;
}
