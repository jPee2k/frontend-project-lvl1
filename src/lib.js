import readlineSync from 'readline-sync';

export const isEven = (num) => num % 2 === 0;
export const getRandomNum = (max = 100) => Math.floor(Math.random() * max);
export const getRandomMultiSign = (max = 3) => {
  const randomNum = getRandomNum(max);

  switch (randomNum) {
    case 0:
      return '+';
    case 1:
      return '-';
    default:
      return '*';
  }
};

export const getAnswer = (answerType) => {
  let gamerAnswer = '';

  if (answerType === 'number') {
    gamerAnswer = Number(readlineSync.question('Your answer: '));
  } else if (answerType === 'string') {
    gamerAnswer = String(readlineSync.question('Your answer: '));
  }

  return gamerAnswer;
};

export const checkAnswer = (gamerName, gamerAnswer, correctAnswer) => {
  if (correctAnswer === gamerAnswer) {
    console.log('Correct!');

    return true;
  }

  console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${gamerName}!`);

  return false;
};

export const printWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const printQuestion = (value) => {
  console.log(`Question: ${value}`);
};

export const printCongrats = (gamerName) => {
  console.log(`Congratulations, ${gamerName}!`);
};
