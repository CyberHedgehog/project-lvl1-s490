#!/usr/bin/env node

import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n';
console.log(greeting);
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const game = (attempts) => {
  if (attempts > 3) {
    return (`Congratulations, ${playerName}!`);
  }
  const num = Math.floor(Math.random() * 1000);
  const answer = readlineSync.question(`Question: ${num}\nYour answer: `).toLowerCase();
  if (answer === isEven(num)) {
    console.log('Correct!');
    return game(attempts + 1);
  }
  return (`${answer} is wrong answer ;(. Correct answer was ${isEven(num)}.\nLet's try again, ${playerName}!`);
};

console.log(game(1));
