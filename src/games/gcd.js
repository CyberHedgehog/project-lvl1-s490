import { cons } from 'hexlet-pairs';
import engine from '../engine';

const gcdEval = (n1, n2) => {
  const remainder = n1 % n2;
  if (remainder === 0) {
    return n2;
  }
  return gcdEval(n2, remainder);
};

const game = () => {
  const firstNum = Math.floor(Math.random() * (101 - 1)) + 1;
  const secondNum = Math.floor(Math.random() * (101 - 1)) + 1;
  const question = `${firstNum} ${secondNum}`;
  const answer = firstNum > secondNum ? gcdEval(firstNum, secondNum) : gcdEval(secondNum, firstNum);
  return cons(question, answer);
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  engine(description, game);
};
