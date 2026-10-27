import { tHighPriority } from "../../model/TaskHighPriority.js";
import { tCompletes } from "../../model/TasksCompletes.js";
import { tTotals } from "../../model/TasksTotals.js";
import { tCleared } from "../../model/TCleared.js";
export function addTStats(task) {
    tTotals.incSize();
    tTotals.incTotal();
    tCompletes.incIncomplete();
    if (task.priority === "High") {
        tHighPriority.incHighPriority();
    }
}
export function removeTStats(task) {
    tTotals.decSize();
    if (task.completed) {
        tCompletes.decComplete();
    }
    if (!task.completed) {
        tCompletes.decIncomplete();
    }
    if (task.priority === "High") {
        tHighPriority.decHighPriority();
    }
    tCleared.incTDeleted();
    tCleared.addToCompletedTasks(task);
}
export function markTStats(completed = true) {
    if (completed) {
        tCompletes.incComplete();
        tCompletes.decIncomplete();
    }
    if (!completed) {
        tCompletes.incIncomplete();
        tCompletes.decComplete();
    }
}
export function editTStats(task, propToModify, newVal) {
    if (propToModify === "priority" && task[propToModify] === newVal) {
        console.log(`No need to change stats`);
        return;
    }
    if (propToModify === "priority" && task[propToModify] !== newVal) {
        if (newVal === "High") {
            tHighPriority.incHighPriority();
        }
        if (task[propToModify] === "High") {
            tHighPriority.decHighPriority();
        }
        return;
    }
}
export function clearTCStats(numDeleted, highPriorityAmount) {
    tTotals.size -= numDeleted;
    tCompletes.complete = 0;
    // tCompletes.completed += numDeleted;
    tCleared.completed += numDeleted;
    tHighPriority.highPriority -= highPriorityAmount;
}
//# sourceMappingURL=statHelpers.js.map