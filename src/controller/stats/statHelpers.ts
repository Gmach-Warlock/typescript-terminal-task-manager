import type { Task } from "../../model/task/Task.js";
import { tHighPriority } from "../../model/stats/THighPriority.js";
import { tCompletes } from "../../model/stats/TCompletes.js";
import { tTotals } from "../../model/stats/TTotals.js";
import { tCleared } from "../../model/stats/TCleared.js";
import { logStats } from "../terminal/taskPrompts.js";
import { mainMenu } from "../../view/menu.js";

export function addTStats(task: Task) {
  tTotals.incSize();
  tTotals.incTotal();
  tCompletes.incIncomplete();
  if (task.priority === "High") {
    tHighPriority.incHighPriority();
  }
}

export function removeTStats(task: Task) {
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

export function editTStats(
  task: Task,
  propToModify: keyof Task,
  newVal: string,
) {
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

export function clearTCStats(numDeleted: number, highPriorityAmount: number) {
  tTotals.size -= numDeleted;
  tCompletes.complete = 0;
  // tCompletes.completed += numDeleted;
  tCleared.completed += numDeleted;
  tHighPriority.highPriority -= highPriorityAmount;
}
