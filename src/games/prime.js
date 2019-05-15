import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandomNum from '../utils';

const isPrime = (num) => {
  const iter = (n, count) => {
    if (count === n) {
      return true;
    }
    if (n % count === 0) {
      return false;
    }
    return iter(n, count + 1);
  };
  const startCount = 2;
  return iter(num, startCount);
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
