#!/usr/bin/env node

import getName from '../src/cli.js';
import { printWelcome } from '../src/lib.js';

printWelcome();
getName();
