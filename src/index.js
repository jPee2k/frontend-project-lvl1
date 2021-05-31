import { getAnswer, checkAnswer, printQuestion, printCongrats } from './lib.js';

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

  if (isCorrect) {
    printCongrats(gamerName);
    return true;
  }

  return false;
};
