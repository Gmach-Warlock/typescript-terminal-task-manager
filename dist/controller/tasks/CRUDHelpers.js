import { tStore } from "../../model/TasksStore.js";
import { Task } from "../../model/Task.js";
import { getAddInfo } from "../terminal/infoPrompts.js";
import { addElementToArray, editItemInArray, getInfoQuestion, } from "./taskHelpers1.js";
import { getStringInput } from "../terminal/terminal.js";
import { mainMenu } from "../../view/menu.js";
export async function addTask() {
    const addLookup = await getAddInfo();
    const newTask = new Task(addLookup.title, addLookup.description, addLookup.priority);
    const arr = tStore.tasks;
    const newArray = addElementToArray(arr, newTask);
    tStore.setTasks(newArray);
}
export async function markTask(completed = true) {
    const key = completed ? "Complete" : "Incomplete";
    const titleLookup = {
        Complete: () => getStringInput(getInfoQuestion("complete", "title")),
        Incomplete: () => getStringInput(getInfoQuestion("incomplete", "title")),
    };
    const title = await titleLookup[key]();
    const arr = tStore.tasks;
    const newValue = completed ? true : false;
    const newArray = editItemInArray(arr, "title", title, "completed", newValue);
    if (!newArray) {
        console.log("An item with that title doesn't exist. Returning to main menu. ");
        mainMenu();
        return;
    }
    tStore.setTasks(newArray);
}
//# sourceMappingURL=CRUDHelpers.js.map