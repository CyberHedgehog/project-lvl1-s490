import { cons } from 'hexlet-pairs';
import engine from '../engine';
import { getRandomNum } from '../utils';

const ops = [
  (x, y) => x + y,
  (x, y) => x - y,
  (x, y) => x * y,
];
const textOps = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const game = () => {
  // const operationIndex = Math.floor(Math.random() * ops.length);
  const operationIndex = getRandomNum(0, ops.length);
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const question = `${firstNum} ${textOps[operationIndex]} ${secondNum}`;
  const answer = ops[operationIndex](firstNum, secondNum).toString();
  return cons(question, answer);
};

export default () => {
  engine(description, game);
};
