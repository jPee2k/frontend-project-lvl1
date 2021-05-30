import readlineSync from 'readline-sync';

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');

  if (typeof name !== 'undefined' && name !== '') {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Sorry, but I don't understand your name =(");
    getName();
  }

  return name;
};
