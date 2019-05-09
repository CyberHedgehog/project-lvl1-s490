#!/usr/bin/env node

import index from '../index';
import prime from '../games/prime';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
index(description, prime);
