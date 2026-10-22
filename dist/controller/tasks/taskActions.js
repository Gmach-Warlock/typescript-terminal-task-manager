import { mainMenu } from "../../view/menu.js";
import { logTasks } from "../terminal/taskPrompts.js";
import { closeApp } from "../terminal/terminal.js";
import { addTask, editTask, markTask } from "./CRUDHelpers.js";
function addTaskActions() {
    addTask();
}
function viewAllTasks() {
    setTimeout(() => {
        console.clear();
        console.log("View All Tasks");
        logTasks();
        mainMenu();
    }, 300);
}
function markTaskComplete() {
    markTask();
}
function markTaskIncomplete() {
    markTask(false);
}
function editTaskActions() {
    editTask();
}
function deleteTask() {
    console.log("Coming Soon");
    mainMenu();
}
function searchTasks() {
    console.log("Coming Soon");
    mainMenu();
}
function sortTasks() {
    console.log("Coming Soon");
    mainMenu();
}
function filterTasks() {
    console.log("Coming Soon");
    mainMenu();
}
export function returnAction(val) {
    const lookup = {
        1: () => addTaskActions(),
        2: () => viewAllTasks(),
        3: () => markTaskComplete(),
        4: () => markTaskIncomplete(),
        5: () => editTaskActions(),
        6: () => deleteTask(),
        7: () => searchTasks(),
        8: () => sortTasks(),
        9: () => filterTasks(),
        10: () => closeApp(),
    };
    lookup[val]?.();
}
//# sourceMappingURL=taskActions.js.map