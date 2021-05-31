#!/usr/bin/env node

import getName from '../src/cli.js';
import generateMathItems from '../src/games/even.js';
import startEvenGame from '../src';
import { printWelcome } from '../src/lib.js';

printWelcome();
const name = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
startEvenGame(name, 'string', generateMathItems);
