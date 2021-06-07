import { getRandomNum } from '../lib.js';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const game = () => {
  const minNum = 1;
  const maxNum = 99;

  const firstNum = getRandomNum(maxNum) + minNum;
  const secondNum = getRandomNum(maxNum) + minNum;

  const maxDivisor = getGcd(firstNum, secondNum);

  return [`${firstNum} ${secondNum}`, maxDivisor];
};

export default game;
