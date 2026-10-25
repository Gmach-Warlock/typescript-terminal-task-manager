import { timeStamp } from "../../model/Task.js";
import { tStore } from "../../model/TasksStore.js";
import type { SaveState } from "../../types/interfaces.js";
import { mainMenu } from "../../view/menu.js";
import { makeTaskOjects, recreateTasks } from "../files/fileFactories.js";
import {
  fillStats,
  loadFile,
  saveToFile,
  stateStats,
} from "../files/FileHelpers.js";
import { logStats } from "../terminal/taskPrompts.js";
import { getConfirmation } from "../terminal/terminal.js";

export async function saveApp() {
  const confirmed = await getConfirmation("save");
  if (!confirmed) {
    console.log(`Permission denied. Returning to main menu.`);
    mainMenu();
  }
  const currentStats = await stateStats();
  const currentTasks = makeTaskOjects(tStore.tasks);
  if (!currentTasks) {
    console.log("Problem getting current tasks in saveApp");
    return;
  }
  const saveState: SaveState = {
    tasks: currentTasks,
    stats: currentStats,
    savedAt: timeStamp(),
  };
  saveToFile(saveState);
  mainMenu();
}

export async function loadApp() {
  const isOk = await getConfirmation("load");
  if (!isOk) {
    console.log(`Permission denied. Returning to main menu.`);
    mainMenu();
  }
  const rawState: SaveState = await loadFile();
  if (!loadFile) {
    console.log("failed");
    mainMenu();
  }
  const tasks = recreateTasks(rawState.tasks);
  const stats = rawState.stats;
  console.log("raw stats in loadApp", stats);
  fillStats(stats);
  logStats();
  tStore.setTasks(tasks, "load");
}
export function undoState() {
  console.log("coming soon");
  mainMenu();
}

export function redoState() {
  console.log("coming soon");
  mainMenu();
}
