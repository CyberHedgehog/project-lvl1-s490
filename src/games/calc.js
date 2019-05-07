import { cons } from 'hexlet-pairs';

export default () => {
  const ops = ['+', '-', '*'];
  const index = Math.floor(Math.random() * ops.length);
  const question = `${Math.floor(Math.random() * 100)} ${ops[index]} ${Math.floor(Math.random() * 100)}`;
  const rightAnswer = eval(question);
  return cons(question, rightAnswer);
};
