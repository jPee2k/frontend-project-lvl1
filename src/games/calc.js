import { getRandomNum, getRandomMultiSign } from '../lib.js';

const game = () => {
  const firstNum = getRandomNum();
  const secondNum = getRandomNum();
  const multiSign = getRandomMultiSign();

  let correctAnswer = 0;
  let mathExample = '';

  switch (multiSign) {
    case '+':
      correctAnswer = firstNum + secondNum;
      mathExample = `${firstNum} + ${secondNum}`;
      break;
    case '-':
      correctAnswer = firstNum - secondNum;
      mathExample = `${firstNum} - ${secondNum}`;
      break;
    default:
      correctAnswer = firstNum * secondNum;
      mathExample = `${firstNum} * ${secondNum}`;
  }

  return [mathExample, correctAnswer];
};

export default game;
