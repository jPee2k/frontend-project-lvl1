import { isEven, getRandomNum } from '../lib.js';

export default () => {
  const number = getRandomNum();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};
