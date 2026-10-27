import { timeStamp } from "../../model/Task.js";
import { tStore } from "../../model/TasksStore.js";
import type { SaveState } from "../../types/interfaces.js";
import { mainMenu } from "../../view/menu.js";
import { makeTaskOjects, recreateTasks } from "./fileFactories.js";
import { fillStats, loadFile, saveToFile, stateStats } from "./FileHelpers.js";
import { logStats } from "../terminal/taskPrompts.js";
import { denyAndReturn, getConfirmation } from "../terminal/terminal.js";

export async function saveApp() {
  const confirmed = await getConfirmation("save");
  if (!confirmed) {
    denyAndReturn();
    return;
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
  saveToFile(saveState, "tasks.json");
  // need to make object of state in class
  saveToFile({ title: "Checker Decker in the Pecker" }, "state.json");
  mainMenu();
}

export async function loadApp() {
  const isOk = await getConfirmation("load");
  if (!isOk) {
    denyAndReturn();
    return;
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
