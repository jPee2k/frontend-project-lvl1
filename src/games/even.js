import { isEven, getRandomNum } from '../lib.js';

const game = () => {
  const number = getRandomNum();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

export default game;
