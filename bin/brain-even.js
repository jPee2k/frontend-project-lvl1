#!/usr/bin/env node

import { getName } from '../src/cli.js';
import startEvenGame from '../src/even.js';

console.log('Welcome to the Brain Games!');

const name = getName();
startEvenGame(name);
