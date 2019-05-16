import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const maxAttempts = 3;

export default (description, game) => {
  console.log(`Welcome to the Brain Games!\n${description}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  const play = (attempts) => {
    if (attempts > maxAttempts) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const gameData = game();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    const playerAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      play(attempts + 1);
      return;
    }
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
  };
  play(1);
};
