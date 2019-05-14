import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (description, game) => {
  console.log(`Welcome to the Brain Games!\n${description}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  const play = (attempts) => {
    const maxAttempts = 3;
    if (attempts > maxAttempts) {
      console.log(`Congratulations, ${playerName}!`);
      return null;
    }
    const gameData = game();
    const question = car(gameData);
    const correctAnswer = cdr(gameData).toString();
    const playerAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      return play(attempts + 1);
    }
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
    return null;
  };
  play(1);
};
