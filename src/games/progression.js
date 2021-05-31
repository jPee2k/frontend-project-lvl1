import { getRandomNum } from '../lib.js';

const game = (randomLength = false, randomIncrement = true) => {
  let length = 10;
  let increment = 2;

  if (randomLength) {
    const minLength = 5;
    length = getRandomNum(5) + minLength;
  }

  if (randomIncrement) {
    const minIncrement = 1;
    increment = getRandomNum(9) + minIncrement;
  }

  const progression = [increment];
  for (let i = 1; i <= length; i += 1) {
    progression[i] = progression[i - 1] + increment;
  }

  const randomPosition = getRandomNum(length);
  const answer = progression[randomPosition];
  progression[randomPosition] = '..';

  return [progression.join(' '), answer];
};

export default game;
