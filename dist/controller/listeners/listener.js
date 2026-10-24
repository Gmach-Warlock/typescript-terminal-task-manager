import { mainMenu } from "../../view/menu.js";
import { logStats, logTasks } from "../terminal/taskPrompts.js";
import { tStore } from "../../model/TasksStore.js";
export function myListener() {
    setTimeout(() => {
        // console.clear();
        console.log(`Tasks have been updated`);
        logTasks(tStore.tasks);
        logStats();
        mainMenu();
    }, 500);
}
//# sourceMappingURL=listener.js.map