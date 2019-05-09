#!/usr/bin/env node

import index from '../index';
import progression from '../games/progression';

const description = 'What number is missing in the progression?';
index(description, progression);
