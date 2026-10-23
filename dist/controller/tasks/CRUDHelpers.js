import { tStore } from "../../model/TasksStore.js";
import { Task } from "../../model/Task.js";
import { getAddInfo, getEditInfo } from "../terminal/infoPrompts.js";
import { logTasks } from "../terminal/taskPrompts.js";
import { addElementToArray, editItemInArray, getInfoQuestion, removeItemInArray, returnObjInArray, } from "./taskHelpers1.js";
import { getStringInput } from "../terminal/terminal.js";
import { logNotFound, mainMenu } from "../../view/menu.js";
import { addTStats, removeTStats } from "./statHelpers.js";
export async function addTask() {
    const addLookup = await getAddInfo();
    const newTask = new Task(addLookup.title, addLookup.description, addLookup.priority);
    const arr = tStore.tasks;
    const newArray = addElementToArray(arr, newTask);
    if (!newArray) {
        console.log("New array not made properly in addTask");
        return;
    }
    addTStats();
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
        logNotFound();
        return;
    }
    tStore.setTasks(newArray);
}
export async function editTask() {
    const arr = tStore.tasks;
    const title = await getStringInput(getInfoQuestion("edit", "title"));
    const taskToEdit = returnObjInArray(arr, "title", title);
    if (!taskToEdit) {
        logNotFound();
        return;
    }
    const infoObj = await getEditInfo();
    if (!infoObj?.propToEdit)
        return;
    const newArray = editItemInArray(arr, "title", title, infoObj.propToEdit, infoObj?.newValue);
    if (!newArray) {
        logNotFound();
        return;
    }
    tStore.setTasks(newArray);
}
export async function deleteTask() {
    const arr = tStore.tasks;
    const title = await getStringInput(getInfoQuestion("delete", "title"));
    const newArray = removeItemInArray(arr, "title", title);
    if (!newArray) {
        logNotFound();
        return;
    }
    removeTStats();
    tStore.setTasks(newArray);
}
export async function viewTasks(tasks = tStore.tasks) {
    setTimeout(() => {
        console.clear();
        console.log("View All Tasks");
        logTasks(tasks);
        mainMenu();
    }, 300);
}
//# sourceMappingURL=CRUDHelpers.js.map