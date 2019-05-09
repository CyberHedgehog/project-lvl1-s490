#!/usr/bin/env node

import calc from '../games/calc';
import engine from '../engine';

const description = 'What is the result of the expression?';
engine(description, calc);
