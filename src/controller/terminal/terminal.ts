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

export async function getNumericInput(
  question: string,
  numOfOptions: number = 15,
) {
  let hasAnswer: boolean = false;
  let answer;

  while (!hasAnswer) {
    answer = await getAnswer(question);
    if (answer === "") {
      console.log("Please enter a value in the field: ");
      continue;
    }
    if (Number(answer) < 1 || Number(answer) > numOfOptions) {
      console.log("Please enter a number in range: ");
      continue;
    }
    if (Number.isNaN(Number(answer))) {
      console.log("Please enter a number not a string here: ");
      continue;
    }
    if (Number(answer) >= 1 && Number(answer) <= numOfOptions) hasAnswer = true;
  }
  return answer as number;
}

export async function getStringInput(
  question: string,
  numguard: boolean = true,
  numOnly?: boolean,
) {
  let hasAnswer: boolean = false;
  let answer;

  while (!hasAnswer) {
    answer = await getAnswer(question);
    if (answer === "") {
      console.log("Please enter a value in the field: ");
      continue;
    }
    if (numguard)
      if (/^\d+$/.test(answer as string)) {
        console.log("Please enter a string not a number here: ");
        continue;
      }
    if (numOnly)
      if (!/^\d+$/.test(answer as string)) {
        console.log("Please enter a number here. ");
        continue;
      }
    hasAnswer = true;
  }
  return answer as string;
}

export function closeApp() {
  console.log(`
Thank you for using the task app.
Goodbye.
    `);
  rl.close();
}
