import type { Task } from "../../model/Task.js";
import { tHighPriority } from "../../model/TaskHighPriority.js";
import { tCompletes } from "../../model/TasksCompletes.js";
import { tTotals } from "../../model/TasksTotals.js";

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
  console.log(task);
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
