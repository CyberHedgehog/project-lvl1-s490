import { cons } from 'hexlet-pairs';

const isPrime = (n, acc = n - 1) => {
  if (acc === 1) {
    return 'yes';
  }
  if (n % acc === 0) {
    return 'no';
  }
  return isPrime(n, acc - 1);
};

export default () => {
  const question = Math.floor(Math.random() * (50 - 1) + 1) * 2 + 1; // only odd numbers
  const correctAnswer = isPrime(question);
  return cons(question, correctAnswer);
};
