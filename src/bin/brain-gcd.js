#!/usr/bin/env node

import gcd from '../games/gcd';
import engine from '../engine';

const description = 'Find the greatest common divisor of given numbers.';
engine(description, gcd);
