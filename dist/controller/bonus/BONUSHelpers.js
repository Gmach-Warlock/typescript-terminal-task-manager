import { tStore } from "../../model/state/TStore.js";
import { tCleared } from "../../model/stats/TCleared.js";
import { logNotFound, mainMenu } from "../../view/menu.js";
import { clearTCStats } from "../stats/statHelpers.js";
import { logTasks } from "../terminal/taskPrompts.js";
import { denyAndReturn, getConfirmation } from "../terminal/terminal.js";
import { returnFilterArray } from "../tasks/taskHelpers2.js";
import { Subtask } from "../../model/tChildren/Subtask.js";
import { TSubtasks } from "../../model/tChildren/TSubtasks.js";
import { tBank } from "../../model/tChildren/TSubsBank.js";
import { getSubTaskInfo } from "../terminal/otherPrompts.js";
export async function clearCompleted() {
    const confirmed = await getConfirmation("clear completed");
    if (!confirmed) {
        denyAndReturn();
        return;
    }
    const arr = tStore.tasks;
    const completedArray = returnFilterArray(arr, "Complete") ?? [];
    // need to figure out how many high priortity to deduct here
    let highPiorityCount = 0;
    completedArray.forEach((task) => {
        if (task.priority === "High")
            highPiorityCount++;
    });
    const notCompletedArray = returnFilterArray(arr, "Incomplete") ?? [];
    if (!notCompletedArray) {
        console.log("Nothing is completed");
        logTasks(arr);
        mainMenu();
        return;
    }
    const numDeleted = arr.length - notCompletedArray.length;
    clearTCStats(numDeleted, highPiorityCount);
    tCleared.completedTasks = completedArray;
    tStore.setTasks(notCompletedArray, "replace");
    mainMenu();
}
export async function addSubtask() {
    const infoObj = await getSubTaskInfo();
    if (!infoObj)
        return;
    const newSubTask = new Subtask(infoObj.title, infoObj.STTitle, infoObj.STDescription, infoObj.STPriority);
    const subTasks = tBank.subBank.find((subtasks) => subtasks.parent === infoObj.title);
    const newSubTasks = new TSubtasks(infoObj.title);
    const arrToUse = subTasks ?? newSubTasks;
    arrToUse.addSubtask(newSubTask);
    tBank.addToBank(arrToUse);
    tStore.setTasks(tStore.tasks, "subtask");
    mainMenu();
}
//# sourceMappingURL=BONUSHelpers.js.map