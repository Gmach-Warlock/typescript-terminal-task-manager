import { mainMenu } from "../../view/menu.js";
import { closeApp } from "../terminal/terminal.js";
import { addTask, editTask, markTask, viewTasks, deleteTask, } from "./CRUDHelpers.js";
import { searchTasks, filterTasks } from "./SSFHelpers.js";
function sortTasks() {
    console.log("Coming Soon");
    mainMenu();
}
export function returnAction(val) {
    const lookup = {
        1: () => addTask(),
        2: () => viewTasks(),
        3: () => markTask(),
        4: () => markTask(false),
        5: () => editTask(),
        6: () => deleteTask(),
        7: () => searchTasks(),
        8: () => sortTasks(),
        9: () => filterTasks(),
        10: () => closeApp(),
    };
    lookup[val]?.();
}
//# sourceMappingURL=taskActions.js.map