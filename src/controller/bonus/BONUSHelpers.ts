import { tStore } from "../../model/state/TStore.js";
import { tCleared } from "../../model/stats/TCleared.js";
import { logNotFound, mainMenu } from "../../view/menu.js";
import { clearTCStats } from "../stats/statHelpers.js";
import { logTasks } from "../terminal/taskPrompts.js";
import {
  denyAndReturn,
  getConfirmation,
  getStringInput,
} from "../terminal/terminal.js";
import {
  addElementToArray,
  editItemInArray,
  getInfoQuestion,
  returnObjInArray,
} from "../tasks/taskHelpers1.js";
import { returnFilterArray } from "../tasks/taskHelpers2.js";

export async function clearCompleted() {
  const confirmed = await getConfirmation("clear completed");
  if (!confirmed) {
    denyAndReturn();
    return;
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
  tCleared.completedTasks = completedArray;
  tStore.setTasks(notCompletedArray, "replace");
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
