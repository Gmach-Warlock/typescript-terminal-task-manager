import type { Task } from "../../model/Task.js";
import { tCompletes } from "../../model/TasksCompletes.js";
import { tTotals } from "../../model/TasksTotals.js";

export function addTStats() {
  tTotals.incSize();
  tTotals.incTotal();
  tCompletes.incIncomplete();
}

export function removeTStats(task: Task) {
  tTotals.decSize();
  if (task.completed) {
    tCompletes.decComplete();
  }
  if (!task.completed) {
    tCompletes.decIncomplete();
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
