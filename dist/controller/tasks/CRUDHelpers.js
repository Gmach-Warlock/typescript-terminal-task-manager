import { tStore } from "../../model/TasksStore.js";
import { Task } from "../../model/Task.js";
import { getAddInfo, getEditInfo } from "../terminal/infoPrompts.js";
import { logTasks } from "../terminal/taskPrompts.js";
import { addElementToArray, editItemInArray, getInfoQuestion, removeItemInArray, returnObjInArray, } from "./taskHelpers1.js";
import { getStringInput } from "../terminal/terminal.js";
import { logNotFound, mainMenu } from "../../view/menu.js";
import { addTStats, editTStats, markTStats, removeTStats, } from "../stats/statHelpers.js";
export async function addTask() {
    const addLookup = await getAddInfo();
    const newTask = new Task(addLookup.title, addLookup.description, addLookup.priority, addLookup.category);
    const arr = tStore.tasks;
    const newArray = addElementToArray(arr, newTask);
    if (!newArray) {
        console.log("New array not made properly in addTask");
        return;
    }
    addTStats(newTask);
    tStore.setTasks(newArray, "add");
    // tStore.saveTasks();
}
export async function markTask(completed = true) {
    const title = completed
        ? await getStringInput(getInfoQuestion("complete", "title"))
        : await getStringInput(getInfoQuestion("incomplete", "title"));
    const arr = tStore.tasks;
    const newValue = completed ? true : false;
    const foundItem = returnObjInArray(arr, "title", title);
    if (!foundItem)
        return;
    const newArray = editItemInArray(arr, foundItem, "id", "completed", newValue);
    if (!newArray) {
        logNotFound();
        return;
    }
    completed ? markTStats() : markTStats(false);
    const purpose = completed ? "complete" : "incomplete";
    tStore.setTasks(newArray, purpose);
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
    if (!infoObj || !infoObj.propToEdit || infoObj.newValue === undefined)
        return;
    editTStats(taskToEdit, infoObj.propToEdit, infoObj.newValue);
    const newArray = editItemInArray(arr, taskToEdit, "title", infoObj.propToEdit, infoObj?.newValue);
    if (!newArray) {
        logNotFound();
        return;
    }
    tStore.setTasks(newArray, "edit");
}
export async function deleteTask() {
    const arr = tStore.tasks;
    const title = await getStringInput(getInfoQuestion("delete", "title"));
    const itemToRemove = returnObjInArray(arr, "title", title);
    if (!itemToRemove)
        return;
    const newArray = removeItemInArray(arr, itemToRemove, "id");
    if (!newArray) {
        logNotFound();
        return;
    }
    removeTStats(itemToRemove);
    tStore.setTasks(newArray, "delete");
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