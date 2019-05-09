#!/usr/bin/env node

import even from '../games/even';
import engine from '../engine';

const description = 'Answer "yes" if number even otherwise answer "no".';
engine(description, even);
