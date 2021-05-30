import readlineSync from 'readline-sync';

const getRandomNum = (max = 100) => Math.floor(Math.random() * max);
const isEven = (num) => num % 2 === 0;

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;
  let isCorrect = true;
  while (isCorrect && counter < 3) {
    const number = getRandomNum();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      isCorrect = true;
      console.log('Correct!');
    } else {
      isCorrect = false;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }

    counter += 1;
  }

  if (isCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
};
