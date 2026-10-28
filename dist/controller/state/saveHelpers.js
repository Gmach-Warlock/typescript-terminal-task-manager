import { timeStamp } from "../../model/task/Task.js";
import { tStore } from "../../model/state/TStore.js";
import { mainMenu } from "../../view/menu.js";
import { makeOtherStats, makeTaskOjects, recreateTasks, } from "./fileFactories.js";
import { fillStats, fillTAdds, loadFile, saveToFile, stateStats, } from "./fileHelpers.js";
import { logStats } from "../terminal/taskPrompts.js";
import { denyAndReturn, getConfirmation } from "../terminal/terminal.js";
export async function saveApp() {
    const confirmed = await getConfirmation("save");
    if (!confirmed) {
        denyAndReturn();
        return;
    }
    const currentStats = await stateStats();
    const tAdds = makeOtherStats();
    const currentTasks = makeTaskOjects(tStore.tasks);
    if (!currentTasks) {
        console.log("Problem getting current tasks in saveApp");
        return;
    }
    const saveState = {
        tasks: currentTasks,
        stats: currentStats,
        tAdds: tAdds,
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
    const rawState = await loadFile();
    if (!loadFile) {
        console.log("failed");
        mainMenu();
    }
    const tasks = recreateTasks(rawState.tasks);
    const stats = rawState.stats;
    const tAdds = rawState.tAdds;
    fillStats(stats);
    fillTAdds(tAdds);
    logStats();
    tStore.setTasks(tasks, "load");
}
//# sourceMappingURL=saveHelpers.js.map