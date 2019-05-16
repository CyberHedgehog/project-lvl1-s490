import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandomNum from '../utils';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (count) => {
    if (count === num) {
      return true;
    }
    if (num % count === 0) {
      return false;
    }
    return iter(count + 1);
  };
  const startCount = 2;
  return iter(startCount);
};

const game = () => {
  const question = getRandomNum(1, 50) * 2 + 1; // only odd numbers
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  engine(description, game);
};
