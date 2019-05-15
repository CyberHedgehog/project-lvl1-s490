import { cons } from 'hexlet-pairs';
import engine from '../engine';
import { getRandomNum } from '../utils';

const progressionSize = 10;
const description = 'What number is missing in the progression?';

const progressionGenerator = (start, size, diff) => {
  const iter = (acc) => {
    if (acc.length === size) {
      return acc;
    }
    const nextItem = acc[acc.length - 1] + diff;
    return iter([...acc, nextItem]);
  };
  return iter([start]);
};

const game = () => {
  const start = getRandomNum(1, 10);
  const difference = getRandomNum(1, 10);
  const progression = progressionGenerator(start, progressionSize, difference);
  const hiddenElement = progression[getRandomNum(0, progression.length - 1)];
  const question = progression.map(v => (v === hiddenElement ? '..' : v)).join(' ');
  const answer = hiddenElement.toString();
  return cons(question, answer); // correctAnswer is hiddenElement
};

export default () => {
  engine(description, game);
};
