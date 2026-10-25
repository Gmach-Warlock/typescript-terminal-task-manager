import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { makeStatsObject, makeTaskOjects } from "./fileFactories.js";
import { mainMenu } from "../../view/menu.js";
import { tStore } from "../../model/TasksStore.js";
import { tTotals } from "../../model/TasksTotals.js";
import { tCompletes } from "../../model/TasksCompletes.js";
import type { SaveState, StatsObj } from "../../types/interfaces.js";
import { tHighPriority } from "../../model/TaskHighPriority.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function saveToFile(state: SaveState) {
  try {
    const convertedData = JSON.stringify(state);
    const dataDir = path.join(__dirname, "../../../data");
    const filePath = path.join(dataDir, "tasks.json");
    await fs.promises.mkdir(dataDir, { recursive: true });
    const callBack: fs.NoParamCallback = (err) => {
      if (err) console.error(err);
    };
    fs.writeFile(filePath, convertedData, callBack);
    console.log("Successfully saved to: ", filePath);
    tStore.setTasks(tStore.tasks, "save");
  } catch (error) {
    console.error("Failed to save file", error);
    mainMenu();
  }
}

export async function loadFile() {
  const dataDir = path.join(__dirname, "../../../data");
  const filePath = path.join(dataDir, "tasks.json");
  try {
    await fs.promises.access(filePath);
  } catch (error) {
    console.log("Could not load tasks. Re-initializing", error);
    return;
  }
  const data = await fs.promises.readFile(filePath, "utf-8");
  if (!data.trim()) {
    console.log("Task file is empty");
    return;
  }
  const parsed = JSON.parse(data);
  if (!parsed) {
    console.log("Error parsing in load file");
    return;
  }
  return parsed;
}

export async function stateStats() {
  const newStatsObj = makeStatsObject(
    tTotals.size,
    tTotals.total,
    tCompletes.complete,
    tCompletes.incomplete,
    tCompletes.completed,
    tHighPriority.highPriority,
  );
  return newStatsObj;
}

export async function fillStats(statsObj: StatsObj) {
  console.log("stats object in fill stats", statsObj);
  tTotals.size = statsObj.size;
  tTotals.total = statsObj.total;
  tCompletes.complete = statsObj.complete;
  tCompletes.incomplete = statsObj.incomplete;
  tCompletes.completed = statsObj.completed;
}
