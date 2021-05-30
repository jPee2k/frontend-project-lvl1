#!/usr/bin/env node

import getName from '../src/cli.js';
import generateMathItems from '../src/even.js';
import startEvenGame from '../src/core.js';

console.log('Welcome to the Brain Games!');
const name = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
startEvenGame(name, 'string', generateMathItems);
