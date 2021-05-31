import { getRandomNum } from '../lib.js';

export default () => {
  const firstNum = getRandomNum(99) + 1;
  const secondNum = getRandomNum(99) + 1;
  const minNum = firstNum < secondNum ? firstNum : secondNum;

  let maxDivisor = 0;

  for (let i = 0, divisor = 1; i < minNum; i += 1) {
    if (firstNum % divisor === 0 && secondNum % divisor === 0) {
      maxDivisor = divisor;
    }

    divisor += 1;
  }

  return [`${firstNum} ${secondNum}`, maxDivisor];
};
