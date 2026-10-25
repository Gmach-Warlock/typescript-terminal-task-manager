import readline from "readline";
import { mainMenu } from "../../view/menu.js";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}
export async function getAnswer(question) {
    const answer = await askQuestion(question);
    return answer;
}
export async function getNumericInput(question, numOfOptions = 20) {
    let hasAnswer = false;
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
        if (Number(answer) >= 1 && Number(answer) <= numOfOptions)
            hasAnswer = true;
    }
    return answer;
}
export async function getStringInput(question, numguard = true, numOnly) {
    let hasAnswer = false;
    let answer;
    while (!hasAnswer) {
        answer = await getAnswer(question);
        if (answer === "") {
            console.log("Please enter a value in the field: ");
            continue;
        }
        if (numguard)
            if (/^\d+$/.test(answer)) {
                console.log("Please enter a string not a number here: ");
                continue;
            }
        if (numOnly)
            if (!/^\d+$/.test(answer)) {
                console.log("Please enter a number here. ");
                continue;
            }
        hasAnswer = true;
    }
    return answer;
}
export async function getConfirmation(purpose) {
    const key = await getNumericInput(`Are you sure you want to ${purpose}?
    
  1. Yes
  2. No
  
  Please enter the appropriate value: `, 2);
    const answerLookup = {
        1: true,
        2: false,
    };
    if (!answerLookup)
        return;
    return answerLookup[key];
}
export async function closeApp() {
    const confirmed = await getConfirmation("exit");
    if (!confirmed) {
        console.log("Permission denied. Returning to main menu. ");
        mainMenu();
    }
    console.log(`
Thank you for using the task app.
Goodbye.
    `);
    rl.close();
}
//# sourceMappingURL=terminal.js.map