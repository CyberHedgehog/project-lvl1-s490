import { cons } from 'hexlet-pairs';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  const question = Math.floor(Math.random() * 1000);
  const answer = isEven(question);
  return cons(question, answer);
};
