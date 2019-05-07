#!/usr/bin/env node

import even from '../games/even';
import index from '../index';

const description = 'Answer "yes" if number even otherwise answer "no".';
index(description, even);
