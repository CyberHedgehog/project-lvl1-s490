import { cons } from 'hexlet-pairs';
import engine from '../engine';
import { getRandomNum } from '../utils';

const isPrime = (num) => {
  const iter = (n, acc) => {
    if (acc === 1) {
      return true;
    }
    if (n % acc === 0) {
      return false;
    }
    return iter(n, acc - 1);
  };
  return iter(num, num - 1);
};

const game = () => {
  const question = getRandomNum(1, 50) * 2 + 1; // only odd numbers
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  engine(description, game);
};
