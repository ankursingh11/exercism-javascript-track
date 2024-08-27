
// https://exercism.org/tracks/javascript/exercises/perfect-numbers/edit

const validate = (num) => {
  if(num === 0){
    throw new Error('Classification is only possible for natural numbers.');
  }
  if(num < 0){
    throw new Error('Classification is only possible for natural numbers.')
  }
}

const findFactors = (num) => {
  const factors = [];
  for(let i = 0; i < num; i++){
    if(num%i === 0){
      factors.push(i);
    }
  }
  return factors;
}

export const classify = (num) => {
  validate(num)
  const factors = findFactors(num);
  const sumOfFactors = factors.reduce((acc, num) => acc+num, 0);
  if(num === sumOfFactors) return "perfect";
  else if(num < sumOfFactors) return "abundant";
  return "deficient";
};