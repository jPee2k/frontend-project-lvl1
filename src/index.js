import { getAnswer, checkAnswer } from './lib.js';
import { printQuestion } from './cli.js';

export default (gamerName, answerType, game) => {
  let counter = 0;
  let isCorrect = true;

  const countOfRounds = 3;
  while (isCorrect && counter < countOfRounds) {
    const items = game();
    const [question, correctAnswer] = items;

    printQuestion(question);

    isCorrect = checkAnswer(gamerName, getAnswer(answerType), correctAnswer);
    counter += 1;
  }

  return isCorrect;
};
