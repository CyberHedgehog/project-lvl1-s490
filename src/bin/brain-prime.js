#!/usr/bin/env node

import engine from '../engine';
import prime from '../games/prime';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
engine(description, prime);
