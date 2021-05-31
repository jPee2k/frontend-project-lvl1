#!/usr/bin/env node

import {
  getName, printWelcome, printRule, printCongrats,
} from '../src/cli.js';
import generateMathExample from '../src/games/calc.js';
import startGame from '../src/index.js';

printWelcome();
const gamerName = getName();
printRule('What is the result of the expression?');
const isWin = startGame(gamerName, 'number', generateMathExample);

if (isWin) {
  printCongrats(gamerName);
}
