import type { Task } from "../../model/task/Task.js";
import { tHighPriority } from "../../model/stats/THighPriority.js";
import { tCompletes } from "../../model/stats/TCompletes.js";
import { tTotals } from "../../model/stats/TTotals.js";
import { tCleared } from "../../model/stats/TCleared.js";

export function logTask(task: Task) {
  console.log(`
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
-----------------------------------------`);
}

export function logTasks(tasks: Task[]) {
  console.log(`Here are all of your tasks

-----------------------------------------`);
  tasks.forEach((task) => logTask(task));
}

export function logStats() {
  tTotals.logTotals();
  tCompletes.logCompletes();
  tHighPriority.logHighPriority();
  tCleared.logCleared();
  console.log(`
----------------------------------------`);
}
