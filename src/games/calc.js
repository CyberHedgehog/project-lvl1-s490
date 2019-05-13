import { cons } from 'hexlet-pairs';
import engine from '../engine';

const game = () => {
  const ops = [
    (x, y) => x + y,
    (x, y) => x - y,
    (x, y) => x * y,
  ];
  const textOps = ['+', '-', '*'];
  const index = Math.floor(Math.random() * ops.length);
  const firstNum = Math.floor(Math.random() * 100);
  const secondNum = Math.floor(Math.random() * 100);
  const question = `${firstNum} ${textOps[index]} ${secondNum}`;
  const rightAnswer = ops[index](firstNum, secondNum);
  return cons(question, rightAnswer);
};

export default () => {
  const description = 'What is the result of the expression?';
  engine(description, game);
};
