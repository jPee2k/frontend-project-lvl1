import { getAnswer, checkAnswer, printQuestion } from './lib.js';

export default (name, type, logicName) => {
  let counter = 0;
  let isCorrect = true;
  while (isCorrect && counter < 3) {
    const items = logicName();
    const [math, correctAnswer] = items;

    printQuestion(math);

    isCorrect = checkAnswer(name, getAnswer(type), correctAnswer);
    counter += 1;
  }

  if (isCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
};
