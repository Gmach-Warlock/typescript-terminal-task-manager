import { tStore } from "../../model/TasksStore.js";
import { Task } from "../../model/Task.js";
import { getAddInfo } from "../terminal/infoPrompts.js";
import { addElementToArray } from "./taskHelpers1.js";

export async function addTask() {
  const addLookup = await getAddInfo();
  const newTask = new Task(
    addLookup.title,
    addLookup.description,
    addLookup.priority,
  );
  const arr = tStore.tasks;
  const newArray = addElementToArray(arr, newTask);
  tStore.setTasks(newArray);
}
