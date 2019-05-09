import { cons } from 'hexlet-pairs';

const progressionGenerator = (start, size, d) => {
  const iter = (acc) => {
    if (acc.length === size) {
      return acc;
    }
    const nextItem = acc[acc.length - 1] + d;
    return iter([...acc, nextItem]);
  };
  return iter([start]);
};

export default () => {
  const start = Math.floor(Math.random() * (11 - 1) + 1);
  const dif = Math.floor(Math.random() * (11 - 1) + 1);
  const progression = progressionGenerator(start, 10, dif);
  const hiddenElement = progression[Math.floor(Math.random() * (10 - 1) + 1)];
  const question = progression.map(v => (v === hiddenElement ? '..' : v)).join(' ');
  return cons(question, hiddenElement); // correctAnswer is hiddenElement
};
