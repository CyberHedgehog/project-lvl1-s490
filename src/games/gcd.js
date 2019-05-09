import { cons } from 'hexlet-pairs';

const gcdEval = (n1, n2) => {
  const remainder = n1 % n2;
  if (remainder === 0) {
    return n2;
  }
  return gcdEval(n2, remainder);
};

export default () => {
  const firstNum = Math.floor(Math.random() * (101 - 1)) + 1;
  const secondNum = Math.floor(Math.random() * (101 - 1)) + 1;
  const question = `${firstNum} ${secondNum}`;
  const answer = firstNum > secondNum ? gcdEval(firstNum, secondNum) : gcdEval(secondNum, firstNum);
  return cons(question, answer);
};
