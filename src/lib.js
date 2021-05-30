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

export const getAnswer = (type) => {
  let userAnswer = '';

  if (type === 'number') {
    userAnswer = Number(readlineSync.question('Your answer: '));
  } else if (type === 'string') {
    userAnswer = String(readlineSync.question('Your answer: '));
  }

  return userAnswer;
};

export const checkAnswer = (name, userAnswer, correctAnswer) => {
  if (correctAnswer === userAnswer) {
    console.log('Correct!');

    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);

  return false;
};

export const printQuestion = (math) => {
  console.log(`Question: ${math}`);
};
