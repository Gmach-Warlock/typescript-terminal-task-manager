import readline from "readline";
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
export async function getNumericInput(question, numOfOptions = 10) {
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
export async function getStringInput(question, numguard = true) {
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
        hasAnswer = true;
    }
    return answer;
}
export function closeApp() {
    console.log(`
Thank you for using the task app.
Goodbye.
    `);
    rl.close();
}
//# sourceMappingURL=terminal.js.map