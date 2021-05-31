#!/usr/bin/env node

import {
  getName, printWelcome, printRule, printCongrats,
} from '../src/cli.js';
import generateMathItems from '../src/games/even.js';
import startGame from '../src/index.js';

printWelcome();
const gamerName = getName();
printRule('Answer "yes" if the number is even, otherwise answer "no".');
const isWin = startGame(gamerName, 'string', generateMathItems);

if (isWin) {
  printCongrats(gamerName);
}
