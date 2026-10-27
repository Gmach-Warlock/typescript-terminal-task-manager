import { tStore } from "../../model/state/TStore.js";
import { getFilterTypePrompt } from "../terminal/ssfPrompts.js";
import { getNumericInput, getStringInput } from "../terminal/terminal.js";
import { viewTasks } from "./CRUDHelpers.js";
import { returnFilterArray, returnSearchArray, returnSortedArray, } from "./taskHelpers2.js";
export async function filterTasks() {
    const arr = tStore.tasks;
    const filterType = await getFilterTypePrompt();
    if (!filterType) {
        console.log("Something went wrong in filterTasks.");
        return;
    }
    const filterArray = returnFilterArray(arr, filterType);
    if (!filterArray) {
        console.log("Something went wrong in guard 2 of filterTasks");
        return;
    }
    viewTasks(filterArray);
}
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
    console.log("searching ...", searchTerm);
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
export async function sortTasks() {
    const arr = tStore.tasks;
    const key = await getNumericInput(`
What is the sort criteria? 

1. Newest
2. Oldest
3. Low Priority
4. High Priority

Please enter the appropriate value: `, 4);
    const lookup = {
        1: "Newest",
        2: "Oldest",
        3: "Low",
        4: "High",
    };
    const sortType = lookup[key];
    if (!sortType) {
        console.log("Something went wrong in SortTasks");
        return;
    }
    console.log(`Sort type: ${sortType}`);
    const sortedArray = returnSortedArray(arr, sortType);
    if (!sortedArray) {
        console.log("!sorted array in sortTasks");
        return;
    }
    tStore.setTasks(sortedArray, "replace");
}
//# sourceMappingURL=SSFHelpers.js.map