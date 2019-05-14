import { cons } from 'hexlet-pairs';
import engine from '../engine';
import { getRandomNum } from '../utils';

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
  const progressionSize = 10;
  const start = getRandomNum(1, 10);
  const difference = getRandomNum(1, 10);
  const progression = progressionGenerator(start, progressionSize, difference);
  const hiddenElement = progression[getRandomNum(0, 9)];
  const question = progression.map(v => (v === hiddenElement ? '..' : v)).join(' ');
  return cons(question, hiddenElement); // correctAnswer is hiddenElement
};

const description = 'What number is missing in the progression?';

export default () => {
  engine(description, game);
};
