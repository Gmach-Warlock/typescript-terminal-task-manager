import { tHighPriority } from "../../model/stats/THighPriority.js";
import { tCompletes } from "../../model/stats/TCompletes.js";
import { tTotals } from "../../model/stats/TTotals.js";
import { tCleared } from "../../model/stats/TCleared.js";
import { tDates } from "../../model/task/TDates.js";
import { tBank } from "../../model/tChildren/TSubsBank.js";
import { tTags } from "../../model/tChildren/TTags.js";
export function logTask(task) {
    console.log(`
Id: ${task.id},
Title: ${task.title},
Description: ${task.description},
Category: ${task.category}, 
Priority: ${task.priority},
Completed: ${task.completed},
Created: ${task.createdAt},`);
}
export function logTasks(tasks) {
    console.log(`Here are all of your tasks

--------------------------------------------------`);
    tasks.forEach((task) => {
        logTask(task);
        tDates.logDate(task);
        tBank.logSubtasks(task);
        tTags.logTags(task);
    });
    console.log(`--------------------------------------------------`);
}
export function logStats(extra = false) {
    tTotals.logTotals();
    tCompletes.logCompletes();
    tHighPriority.logHighPriority();
    tCleared.logCleared(extra);
    console.log(`
--------------------------------------------------`);
}
//# sourceMappingURL=taskPrompts.js.map