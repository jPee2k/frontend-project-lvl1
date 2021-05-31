import { getRandomNum } from '../lib.js';

const isPrime = (num) => {
  if (num === 0) {
    return false;
  }

  for (let i = 0, divisor = 2; i < num / 2; i += 1) {
    if (num % divisor === 0) {
      return false;
    }

    divisor += 1;
  }

  return true;
};

const game = () => {
  const number = getRandomNum();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

export default game;

console.log(isPrime(0));
