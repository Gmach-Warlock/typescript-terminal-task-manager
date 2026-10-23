import { tStore } from "../../model/TasksStore.js";
import { getNumericInput, getStringInput } from "../terminal/terminal.js";
import { viewTasks } from "./CRUDHelpers.js";
import { returnSearchArray } from "./taskHelpers2.js";
export async function searchTasks() {
    const arr = tStore.tasks;
    const searchTerm = await getStringInput(`What is the term to search for? `, false);
    const searchPropKey = await getNumericInput(`
Which property are we searching in?  

1. Title
2. Description

Please choose the appropriate value:  
`, 2);
    const lookup = {
        1: "title",
        2: "description",
    };
    const searchProp = lookup[searchPropKey];
    console.log("searching tasks for ", searchTerm);
    if (!searchTerm || !searchProp) {
        console.log("Missing params in searchTasks");
        return;
    }
    const searchArray = returnSearchArray(arr, searchProp, searchTerm);
    if (!searchArray) {
        console.log("missing searchArray in searchTasks. ");
        return;
    }
    viewTasks(searchArray);
}
//# sourceMappingURL=SSFHelpers.js.map