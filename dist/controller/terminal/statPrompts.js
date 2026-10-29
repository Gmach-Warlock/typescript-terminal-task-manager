import { logStats } from "./taskPrompts.js";
import { mainMenu } from "../../view/menu.js";
import { tStore } from "../../model/state/TStore.js";
import { returnFilterArray } from "../tasks/taskHelpers2.js";
import { logTasks } from "./taskPrompts.js";
export async function viewStats(extra = false) {
    setTimeout(() => {
        console.clear();
        console.log("Here are the Current Totals");
        logStats(extra);
        mainMenu();
    }, 300);
}
export async function showHighPriority() {
    const arr = tStore.tasks;
    const highPriorities = returnFilterArray(arr, "High");
    logTasks(highPriorities ?? []);
    mainMenu();
}
//# sourceMappingURL=statPrompts.js.map