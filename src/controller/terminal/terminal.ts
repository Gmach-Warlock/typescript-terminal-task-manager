import readline from "readline";
import type { Answer } from "../../types/types.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question: string): Promise<Answer> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer as Answer);
    });
  });
}

export async function getAnswer(question: string): Promise<Answer> {
  const answer = await askQuestion(question);
  return answer;
}
