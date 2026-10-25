import { tStore } from "../../model/TasksStore.js";
import { logNotFound, mainMenu } from "../../view/menu.js";
import { clearTCStats } from "../stats/statHelpers.js";
import { logStats, logTasks } from "../terminal/taskPrompts.js";
import { getConfirmation, getStringInput } from "../terminal/terminal.js";
import {
  addElementToArray,
  editItemInArray,
  getInfoQuestion,
  returnObjInArray,
} from "./taskHelpers1.js";
import { returnFilterArray } from "./taskHelpers2.js";

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
  const confirmed = await getConfirmation("clear completed");
  if (!confirmed) {
    console.log("Permission Denied. Returning to main menu.");
    mainMenu();
  }
  const arr = tStore.tasks;
  const completedArray = returnFilterArray(arr, "Complete") ?? [];
  // need to figure out how many high priortity to deduct here
  let highPiorityCount: number = 0;
  completedArray.forEach((task) => {
    if (task.priority === "High") highPiorityCount++;
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
  tStore.setTasks(notCompletedArray, "replace");
  mainMenu();
}

export async function addTag() {
  const arr = tStore.tasks;
  const title = await getStringInput(getInfoQuestion("tag", "title"));

  const itemToEdit = returnObjInArray(arr, "title", title);
  if (!itemToEdit) {
    logNotFound();
    return;
  }
  const newTag: string = await getStringInput(
    `What is the tag to add to this task? `,
  );
  if (!newTag) {
    console.log("Couldn't get tag");
    mainMenu();
  }
  const newTagsArray: string[] = addElementToArray(itemToEdit.tags, newTag);
  const newArray = editItemInArray(arr, itemToEdit, "id", "tags", newTagsArray);
  if (!newArray) {
    console.log("Array not obtained in addTagToTask");
    return;
  }
  tStore.setTasks(newArray, "tag");
  mainMenu();
}

export async function addSubtask() {
  const arr = tStore.tasks;
  const title = await getStringInput(getInfoQuestion("subtask", "title"));
  const itemToEdit = returnObjInArray(arr, "title", title);
  if (!itemToEdit) {
    logNotFound();
    return;
  }
  const subtask = await getStringInput(`What is the subtask? `);
  const newArray: string[] = addElementToArray(itemToEdit.subtasks, subtask);
  const newTasks = editItemInArray(arr, itemToEdit, "id", "subtasks", newArray);
  if (!newTasks) {
    console.log("No new tasks in addSubtask");
    return;
  }
  tStore.setTasks(newTasks, "subtask");
  mainMenu();
}
