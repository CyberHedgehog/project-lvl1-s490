import { cons } from 'hexlet-pairs';
import engine from '../engine';
import getRandomNum from '../utils';

const isEven = num => num % 2 === 0;

const game = () => {
  const question = getRandomNum(1, 1000);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  engine(description, game);
};
