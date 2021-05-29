import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name? ');

  if (typeof name !== 'undefined') {
    console.log(`Hello, ${name}`);
  }
};
