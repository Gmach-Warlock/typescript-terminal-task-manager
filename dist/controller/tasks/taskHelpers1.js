export function addElementToArray(arr, element) {
    return [...arr, element];
}
export function getInfoQuestion(purpose, prop) {
    const lookup = {
        add: `Please give the new task a ${prop}: `,
        edit: `What is the ${prop} of the task to edit? `,
        delete: `What is the ${prop} of the task to delete? `,
        complete: `What is the ${prop} of the task to mark complete? `,
        incomplete: `What is the ${prop} of the task to mark incomplete? `,
        replace: `What is the new ${prop} of the task? `,
    };
    const question = lookup[purpose];
    return question;
}
//# sourceMappingURL=taskHelpers1.js.map