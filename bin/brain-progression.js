#!/usr/bin/env node

import {
  getName, printWelcome, printRule, printCongrats,
} from '../src/cli.js';
import findNumberOfProgression from '../src/games/progression.js';
import startGame from '../src/index.js';

printWelcome();
const gamerName = getName();
printRule('What number is missing in the progression?');
const isWin = startGame(gamerName, 'number', findNumberOfProgression);

if (isWin) {
  printCongrats(gamerName);
}
