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
            return;
        }
        if (Number(answer) < 1 || Number(answer) > numOfOptions) {
            console.log("Please enter a valid option number: ");
            return;
        }
        if (Number(answer) >= 1 && Number(answer) <= numOfOptions)
            hasAnswer = true;
    }
    if (answer)
        console.log(answer);
    return answer;
}
//# sourceMappingURL=terminal.js.map