import { tHighPriority } from "../../model/TaskHighPriority.js";
import { tCompletes } from "../../model/TasksCompletes.js";
import { tTotals } from "../../model/TasksTotals.js";
export function logTasks(tasks) {
    console.log(`Here are all of your tasks

-----------------------------------------`);
    tasks.forEach((task) => console.log(`
Id: ${task.id},
Title: ${task.title},
Description: ${task.description},
Category: ${task.category}, 
Priority: ${task.priority},
Completed: ${task.completed},
Created: ${task.createdAt},
Due: ${task.dueDate},
Tags: ${task.tags}
Subtasks: ${task.subtasks}  
-----------------------------------------`));
}
export function logStats() {
    tTotals.logTotals();
    tCompletes.logCompletes();
    tHighPriority.logHighPriority();
    console.log(`
----------------------------------------`);
}
//# sourceMappingURL=taskPrompts.js.map