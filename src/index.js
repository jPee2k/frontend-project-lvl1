import { getAnswer, checkAnswer } from './lib.js';
import getName from './cli.js';

const runGame = (game, rule) => {
  console.log('Welcome to the Brain Games!');

  const gamerName = getName();
  console.log(rule);

  let counter = 0;
  let isCorrect = true;

  const countOfRounds = 3;
  while (isCorrect && counter < countOfRounds) {
    const data = game();
    const [question, correctAnswer] = data;

    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();

    isCorrect = checkAnswer(gamerName, userAnswer, correctAnswer);
    counter += 1;
  }

  if (isCorrect) {
    console.log(`Congratulations, ${gamerName}!`);
  }

  return isCorrect;
};

export default runGame;
