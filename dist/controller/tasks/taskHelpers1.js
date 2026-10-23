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
export function editItemInArray(arr, propToFind, findVal, propToEdit, newVal) {
    const copy = [...arr];
    const foundItem = returnObjInArray(copy, propToFind, findVal);
    if (!foundItem) {
        console.log("Item not found: editItem in Array");
        return;
    }
    foundItem[propToEdit] = newVal;
    return copy;
}
export function removeItemInArray(arr, propToFind, findVal) {
    const foundItem = returnObjInArray(arr, propToFind, findVal);
    if (!foundItem) {
        return;
    }
    const edittedCopy = arr.filter((item) => item[propToFind] !== findVal);
    return edittedCopy;
}
//# sourceMappingURL=taskHelpers1.js.map