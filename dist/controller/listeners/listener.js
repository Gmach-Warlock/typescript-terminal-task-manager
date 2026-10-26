import { mainMenu } from "../../view/menu.js";
import { logStats, logTasks } from "../terminal/taskPrompts.js";
import { tStore } from "../../model/TasksStore.js";
import { timeStamp } from "../../model/Task.js";
import { tHistory } from "../../model/TasksHistory.js";
import { stateStats } from "../files/FileHelpers.js";
import { makeTaskOjects } from "../files/fileFactories.js";
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
    const newStats = await stateStats();
    if (!newStats) {
        console.log("Problem getting newStats in historyListener");
        return;
    }
    const newTasks = makeTaskOjects(tStore.tasks);
    const newStateObj = {
        timeChanged: timeStamp(),
        newTasksState: newTasks ?? [],
        newStatsState: newStats,
        typeOfLastChange: purpose,
    };
    if (!newStateObj) {
        console.log("failed in historyListener");
        return;
    }
    tHistory.addNewTasksState(newStateObj);
}
//# sourceMappingURL=listener.js.map