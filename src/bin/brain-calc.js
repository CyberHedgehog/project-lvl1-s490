#!/usr/bin/env node

import calc from '../games/calc';
import index from '../index';

const description = 'What is the result of the expression?';
index(description, calc);
