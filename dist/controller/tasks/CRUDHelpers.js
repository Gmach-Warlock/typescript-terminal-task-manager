import { tStore } from "../../model/TasksStore.js";
import { Task } from "../../model/Task.js";
import { getAddInfo, getEditInfo } from "../terminal/infoPrompts.js";
import { logTasks } from "../terminal/taskPrompts.js";
import { addElementToArray, editItemInArray, getInfoQuestion, removeItemInArray, returnObjInArray, } from "./taskHelpers1.js";
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
    const title = completed
        ? await getStringInput(getInfoQuestion("complete", "title"))
        : await getStringInput(getInfoQuestion("incomplete", "title"));
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
export async function editTask() {
    const arr = tStore.tasks;
    const title = await getStringInput(getInfoQuestion("edit", "title"));
    const taskToEdit = returnObjInArray(arr, "title", title);
    if (!taskToEdit) {
        console.log("No task with that title found. Returning to main menu. ");
        mainMenu();
        return;
    }
    const infoObj = await getEditInfo();
    if (!infoObj?.propToEdit)
        return;
    const newArray = editItemInArray(arr, "title", title, infoObj.propToEdit, infoObj?.newValue);
    if (!newArray) {
        console.log("editItem failed in editTask");
        mainMenu();
        return;
    }
    tStore.setTasks(newArray);
}
export async function deleteTask() {
    const arr = tStore.tasks;
    const title = await getStringInput(getInfoQuestion("delete", "title"));
    const newArray = removeItemInArray(arr, "title", title);
    if (!newArray) {
        console.log("No task with that title found. Returning to main menu. ");
        mainMenu();
        return;
    }
    tStore.setTasks(newArray);
}
export async function viewTasks(tasks = tStore.tasks) {
    setTimeout(() => {
        // console.clear();
        console.log("View All Tasks");
        logTasks(tasks);
        mainMenu();
    }, 300);
}
//# sourceMappingURL=CRUDHelpers.js.map