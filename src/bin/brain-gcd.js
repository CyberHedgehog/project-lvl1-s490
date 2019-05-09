#!/usr/bin/env node

import gcd from '../games/gcd';
import index from '../index';

const description = 'Find the greatest common divisor of given numbers.';
index(description, gcd);
