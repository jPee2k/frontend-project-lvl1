#!/usr/bin/env node

import getName from '../src/cli.js';
import generateMathExample from '../src/games/calc.js';
import startCalcGame from '../src/index.js';
import { printWelcome } from '../src/lib.js';

printWelcome();
const name = getName();
console.log('What is the result of the expression?');
startCalcGame(name, 'number', generateMathExample);
