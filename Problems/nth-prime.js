// https://exercism.org/tracks/javascript/exercises/nth-prime/edit

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export const prime = (n) => {
  if (n === 0) throw new Error("there is no zeroth prime");
  let num = 1;
  let i = 0;
  while (i < n) {
    if (isPrime(num)) {
      i++;
      if (i === n) return num;
    }
    num++;
  }
};
