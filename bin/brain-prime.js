#!/usr/bin/env node

import {
  getName, printWelcome, printRule, printCongrats,
} from '../src/cli.js';
import isPrime from '../src/games/prime.js';
import startGame from '../src/index.js';

printWelcome();
const gamerName = getName();
printRule('Answer "yes" if given number is prime. Otherwise answer "no".');
const isWin = startGame(gamerName, 'string', isPrime);

if (isWin) {
  printCongrats(gamerName);
}
