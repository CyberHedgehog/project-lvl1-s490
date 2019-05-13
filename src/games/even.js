import { cons } from 'hexlet-pairs';
import engine from '../engine';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const game = () => {
  const question = Math.floor(Math.random() * 1000);
  const answer = isEven(question);
  return cons(question, answer);
};

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  engine(description, game);
};
