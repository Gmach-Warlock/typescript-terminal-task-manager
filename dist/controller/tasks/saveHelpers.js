import { tStore } from "../../model/TasksStore.js";
import { mainMenu } from "../../view/menu.js";
import { saveToFile } from "../files/FileHelpers.js";
export function saveApp() {
    const arr = tStore.tasks;
    console.log("Attempting to save app in saveApp");
    saveToFile(arr);
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