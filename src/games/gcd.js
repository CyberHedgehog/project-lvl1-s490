import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandomNum from '../utils';

const gcdEval = (n1, n2) => {
  const min = Math.min(n1, n2);
  const max = Math.max(n1, n2);
  const iter = (num1, num2) => {
    const remainder = num1 % num2;
    if (remainder === 0) {
      return num2;
    }
    return iter(num2, remainder);
  };
  return iter(max, min);
};

const game = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = gcdEval(firstNum, secondNum).toString();
  return cons(question, answer);
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => {
  engine(description, game);
};
