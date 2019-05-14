import { cons } from 'hexlet-pairs';
import engine from '../engine';
import { getRandomNum } from '../utils';

const gcdEval = (n1, n2) => {
  const min = Math.min(n1, n2);
  const max = Math.max(n1, n2);
  const remainder = max % min;
  if (remainder === 0) {
    return n2;
  }
  return gcdEval(n2, remainder);
};

const game = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = gcdEval(firstNum, secondNum);
  return cons(question, answer);
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => {
  engine(description, game);
};
