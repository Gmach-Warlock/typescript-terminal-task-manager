export function getInfoQuestion(purpose, prop) {
    const lookup = {
        add: `Please give the new task a ${prop}: `,
        edit: `What is the ${prop} of the task to edit? `,
        delete: `What is the ${prop} of the task to delete? `,
        complete: `What is the ${prop} of the task to mark complete? `,
        incomplete: `What is the ${prop} of the task to mark incomplete? `,
        replace: `What is the new ${prop} of the task? `,
        subtask: `What is the ${prop} of the task to add the subtask? `,
        tag: `What is the ${prop} of the task to add the tag to? `,
        dueDate: `What is the ${prop} of the task to add a due date to? `,
        redo: `Are you sure you want to redo what you just undid? `,
        undo: "Are you sure you want to undo your last action? ",
        save: "Are you sure you want to save? ",
        load: "Do you want to load the existing tasks? ",
    };
    const question = lookup[purpose];
    return question;
}
export function addElementToArray(arr, element) {
    return [...arr, element];
}
export function returnObjInArray(arr, prop, value) {
    const copy = [...arr];
    const foundItem = copy.find((item) => item[prop] === value);
    if (!foundItem) {
        return undefined;
    }
    return foundItem;
}
export function editItemInArray(arr, obj, findKey, propToEdit, newVal) {
    const copy = [...arr];
    const foundItem = copy.find((item) => item[findKey] === obj[findKey]);
    if (!foundItem) {
        console.log("Item not found: editItem in Array");
        return;
    }
    foundItem[propToEdit] = newVal;
    return copy;
}
export function removeItemInArray(arr, obj, key) {
    const existing = arr.some((item) => item[key] === obj[key]);
    if (!existing)
        return;
    const edittedCopy = arr.filter((item) => item[key] !== obj[key]);
    return edittedCopy;
}
//# sourceMappingURL=taskHelpers1.js.map