#!/usr/bin/env node

import engine from '../engine';
import progression from '../games/progression';

const description = 'What number is missing in the progression?';
engine(description, progression);
