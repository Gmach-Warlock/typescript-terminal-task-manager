import { tHighPriority } from "../../model/TaskHighPriority.js";
import { tCompletes } from "../../model/TasksCompletes.js";
import { tStore } from "../../model/TasksStore.js";
import { tTotals } from "../../model/TasksTotals.js";
import { mainMenu } from "../../view/menu.js";
import { clearTCStats } from "../stats/statHelpers.js";
import { getDueDateInfo } from "../terminal/datePrompts.js";
import { logStats, logTasks } from "../terminal/taskPrompts.js";
import { getStringInput } from "../terminal/terminal.js";
import { addElementToArray, editItemInArray, getInfoQuestion, returnObjInArray, } from "./taskHelpers1.js";
import { returnFilterArray } from "./taskHelpers2.js";
export async function makeDueDate() {
    const dateObj = await getDueDateInfo();
    console.log("Did we get the object?");
    mainMenu();
}
export async function viewStats() {
    setTimeout(() => {
        console.clear();
        console.log("Here are the Current Totals");
        logStats();
        mainMenu();
    }, 300);
}
export async function showHighPriority() {
    const arr = tStore.tasks;
    const highPriorities = returnFilterArray(arr, "High");
    logTasks(highPriorities ?? []);
    mainMenu();
}
export async function clearCompleted() {
    const arr = tStore.tasks;
    const completedArray = returnFilterArray(arr, "Complete") ?? [];
    // need to figure out how many high priortity to deduct here
    let highPiorityCount = 0;
    completedArray.forEach((task) => {
        if (task.priority === "High")
            highPiorityCount++;
    });
    const notCompletedArray = returnFilterArray(arr, "Incomplete") ?? [];
    if (!notCompletedArray) {
        console.log("Nothing is completed");
        logTasks(arr);
        mainMenu();
        return;
    }
    const numDeleted = arr.length - notCompletedArray.length;
    clearTCStats(numDeleted, highPiorityCount);
    tStore.setTasks(notCompletedArray);
    mainMenu();
}
export async function addTag() {
    const arr = tStore.tasks;
    const title = await getStringInput(getInfoQuestion("edit", "title"));
    const itemToEdit = returnObjInArray(arr, "title", title);
    if (!itemToEdit) {
        console.log("An item with that title could not be found. ");
        logTasks(tStore.tasks);
        mainMenu();
    }
    const newTag = await getStringInput(`What is the tag to add to this task? `);
    if (!newTag) {
        console.log("Couldn't get tag");
        mainMenu();
    }
    itemToEdit?.addTagToTask(newTag);
    logTasks(tStore.tasks);
    mainMenu();
}
export async function addSubtask() {
    console.log("It's coming :)");
    mainMenu();
}
//# sourceMappingURL=BONUSHelpers.js.map