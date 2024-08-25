
// https://exercism.org/tracks/javascript/exercises/collatz-conjecture/edit

export const steps = (n) => {
  let step = 0;
  if (n <= 0) {
    throw new Error('Only positive numbers are allowed');
  } else {
    while (n > 1) {
      if (n % 2 === 0) {
        n = n / 2;
        step++;
      } else {
        n = n * 3 + 1;
        step++;
      }
    }
  }
  return step;
};