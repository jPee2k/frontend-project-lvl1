import { getRandomNum } from '../lib.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

const game = () => {
  const number = getRandomNum();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

export default game;
