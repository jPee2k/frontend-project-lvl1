import readlineSync from 'readline-sync';

export const isEven = (num) => num % 2 === 0;
export const isNumber = (val) => (val >= 0 || val < 0);
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

export const getAnswer = () => {
  let gamerAnswer = readlineSync.question('Your answer: ');

  if (isNumber(gamerAnswer)) {
    gamerAnswer = Number(gamerAnswer);
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
