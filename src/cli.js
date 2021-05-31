import _ from 'lodash';
import readlineSync from 'readline-sync';

export const getName = (name = 'John') => {
  const gamerName = _.capitalize(readlineSync.question('May I have your name? '));

  if (typeof gamerName !== 'undefined' && gamerName !== '') {
    console.log(`Hello, ${gamerName}!`);
    return gamerName;
  }

  console.log(`Hello, I will call you ${name}`);
  return name;
};

export const printWelcome = (text = 'Welcome to the Brain Games!') => {
  console.log(text);
};

export const printRule = (text) => {
  console.log(text);
};

export const printQuestion = (value) => {
  console.log(`Question: ${value}`);
};

export const printCongrats = (gamerName) => {
  console.log(`Congratulations, ${gamerName}!`);
};
