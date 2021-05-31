import { getRandomNum } from '../lib.js';

const isPrime = (num) => {
  for (let i = 0, divisor = 2; i < num / 2; i += 1) {
    if (num % divisor === 0) {
      return false;
    }

    divisor += 1;
  }

  return true;
};

export default () => {
  const number = getRandomNum();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};