import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { makeTaskOjects } from "./fileFactories.js";
import { mainMenu } from "../../view/menu.js";
import { logTasks } from "../terminal/taskPrompts.js";
import { tStore } from "../../model/TasksStore.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export async function saveToFile(arr) {
    const objArr = makeTaskOjects(arr);
    try {
        const convertedData = JSON.stringify(objArr);
        const dataDir = path.join(__dirname, "../../../data");
        const filePath = path.join(dataDir, "tasks.json");
        await fs.promises.mkdir(dataDir, { recursive: true });
        const callBack = (err) => {
            if (err)
                console.error(err);
        };
        fs.writeFile(filePath, convertedData, callBack);
        console.log("Successfully saved to: ", filePath);
        tStore.setTasks(arr, "save");
    }
    catch (error) {
        console.error("Failed to save file", error);
        mainMenu();
    }
}
export function loadToFile() { }
//# sourceMappingURL=FileHelpers.js.map