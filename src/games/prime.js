import { cons } from 'hexlet-pairs';
import engine from '../engine';

const isPrime = (n, acc = n - 1) => {
  if (acc === 1) {
    return 'yes';
  }
  if (n % acc === 0) {
    return 'no';
  }
  return isPrime(n, acc - 1);
};

const game = () => {
  const question = Math.floor(Math.random() * (50 - 1) + 1) * 2 + 1; // only odd numbers
  const correctAnswer = isPrime(question);
  return cons(question, correctAnswer);
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engine(description, game);
};
