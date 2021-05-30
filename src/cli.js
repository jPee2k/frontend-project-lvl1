import _ from 'lodash';
import readlineSync from 'readline-sync';

export default () => {
  let name = _.capitalize(readlineSync.question('May I have your name? '));

  if (typeof name !== 'undefined' && name !== '') {
    console.log(`Hello, ${name}!`);
  } else {
    name = 'John';
    console.log(`Hello, I will call you ${name}`);
  }

  return name;
};
