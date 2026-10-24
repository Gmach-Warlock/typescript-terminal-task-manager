import type { Task } from "../../model/Task.js";
import { tCompletes } from "../../model/TasksCompletes.js";
import { tTotals } from "../../model/TasksTotals.js";

export function logTasks(tasks: Task[]) {
  console.log(`Here are all of your tasks

-----------------------------------------`);
  tasks.forEach((task) =>
    console.log(`
Id: ${task.id},
Title: ${task.title},
Description: ${task.description}, 
Priority: ${task.priority};
Completed: ${task.completed};
Created At: ${task.createdAt};

-----------------------------------------`),
  );
}

export function logStats() {
  tTotals.logTotals();
  tCompletes.logCompletes();
  console.log(`
----------------------------------------`);
}
