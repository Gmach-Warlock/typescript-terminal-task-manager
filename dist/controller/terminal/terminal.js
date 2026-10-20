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
//# sourceMappingURL=terminal.js.map