import { tStore } from "../../model/TasksStore.js";
import { mainMenu } from "../../view/menu.js";
import { recreateTasks } from "../files/fileFactories.js";
import { loadFile, saveToFile } from "../files/FileHelpers.js";
import { getConfirmation } from "../terminal/terminal.js";
export async function saveApp() {
    const confirmed = await getConfirmation("save");
    if (!confirmed) {
        console.log(`Permission denied. Returning to main menu.`);
        mainMenu();
    }
    const arr = tStore.tasks;
    console.log("Attempting to save app in saveApp");
    saveToFile(arr);
    mainMenu();
}
export async function loadApp() {
    const isOk = await getConfirmation("load");
    if (!isOk) {
        console.log(`Permission denied. Returning to main menu.`);
        mainMenu();
    }
    const rawArray = await loadFile();
    if (!loadFile) {
        console.log("failed");
        mainMenu();
    }
    recreateTasks(rawArray);
    tStore.setTasks(rawArray, "load");
    mainMenu();
}
export function undoState() {
    console.log("coming soon");
    mainMenu();
}
export function redoState() {
    console.log("coming soon");
    mainMenu();
}
export function removeTaskExtras() {
    console.log("coming soon");
    mainMenu();
}
//# sourceMappingURL=saveHelpers.js.map