import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { makeTaskOjects } from "./fileFactories.js";
import type { Task } from "../../model/Task.js";
import { mainMenu } from "../../view/menu.js";
import { logTasks } from "../terminal/taskPrompts.js";
import { tStore } from "../../model/TasksStore.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function saveToFile(arr: Task[]) {
  const objArr = makeTaskOjects(arr);
  try {
    const convertedData = JSON.stringify(objArr);
    const dataDir = path.join(__dirname, "../../../data");
    const filePath = path.join(dataDir, "tasks.json");
    await fs.promises.mkdir(dataDir, { recursive: true });
    const callBack: fs.NoParamCallback = (err) => {
      if (err) console.error(err);
    };
    fs.writeFile(filePath, convertedData, callBack);
    console.log("Successfully saved to: ", filePath);
    tStore.setTasks(arr, "save");
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
