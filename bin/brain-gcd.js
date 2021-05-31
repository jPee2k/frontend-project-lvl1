#!/usr/bin/env node

import {
  getName, printWelcome, printRule, printCongrats,
} from '../src/cli.js';
import findGreatestCommonDivisor from '../src/games/gcd.js';
import startGame from '../src/index.js';

printWelcome();
const gamerName = getName();
printRule('Find the greatest common divisor of given numbers.');
const isWin = startGame(gamerName, 'number', findGreatestCommonDivisor);

if (isWin) {
  printCongrats(gamerName);
}
