import { mainMenu } from "../../view/menu.js";
import { logStats, logTasks } from "../terminal/taskPrompts.js";
import { tStore } from "../../model/state/TStore.js";
import { timeStamp } from "../../model/task/Task.js";
import { tState } from "../../model/state/TState.js";
import { makeTAddObj, stateStats } from "./fileHelpers.js";
import { makeTaskOjects } from "./fileFactories.js";
export function logListener(purpose) {
    const lookup = {
        add: "A task has been added successfully.",
        delete: "A task has been successfully deleted.",
        edit: "A task has successfully been editted.",
        complete: "A task has been marked complete",
        incomplete: "A task has been marked incomplete",
        subtask: "A subtask has been added to the task.",
        tag: "A tag has been added to the task.",
        dueDate: "A due date has been added to the task.",
        redo: "The last undo was just reversed.",
        undo: "The last action was just reversed",
        save: "Your tasks have been saved successfully.",
        load: "Your tasks have been successfully loaded.",
        replace: "Your Tasks have been editted.",
    };
    const response = lookup[purpose];
    setTimeout(() => {
        // console.clear();
        console.log(`Tasks have been updated. ${response}`);
        logTasks(tStore.tasks);
        logStats();
        mainMenu();
    }, 500);
}
export async function historyListener(purpose) {
    if (purpose === "undo" || purpose === "redo")
        return;
    const newStats = await stateStats();
    if (!newStats) {
        console.log("Problem getting newStats in historyListener");
        return;
    }
    const newIAdds = makeTAddObj();
    const newTasks = makeTaskOjects(tStore.tasks);
    const newStateObj = {
        id: crypto.randomUUID(),
        timeChanged: timeStamp(),
        tasksState: newTasks ?? [],
        statsState: newStats,
        tAddsState: newIAdds,
        typeOfLastChange: purpose,
    };
    if (!newStateObj) {
        console.log("failed in historyListener");
        return;
    }
    tState.addState(newStateObj);
}
//# sourceMappingURL=listener.js.map