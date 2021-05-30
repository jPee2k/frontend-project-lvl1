#!/usr/bin/env node

import getName from '../src/cli.js';
import generateMathExample from '../src/calc.js';
import startCalcGame from '../src/core.js';

console.log('Welcome to the Brain Games!');
const name = getName();
console.log('What is the result of the expression?');
startCalcGame(name, 'number', generateMathExample);
