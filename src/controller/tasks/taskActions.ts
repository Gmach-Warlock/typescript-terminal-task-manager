import { closeApp } from "../terminal/terminal.js";
import {
  addTag,
  addSubtask,
  clearCompleted,
  showHighPriority,
  viewStats,
} from "./BONUSHelpers.js";
import {
  addTask,
  editTask,
  markTask,
  viewTasks,
  deleteTask,
} from "./CRUDHelpers.js";
import { searchTasks, filterTasks, sortTasks } from "./SSFHelpers.js";
import { addDueDate } from "./dateHelpers.js";
export function returnAction(val: number): void {
  const lookup: Record<number, () => void> = {
    1: () => addTask(),
    2: () => viewTasks(),
    3: () => markTask(),
    4: () => markTask(false),
    5: () => editTask(),
    6: () => deleteTask(),
    7: () => searchTasks(),
    8: () => sortTasks(),
    9: () => filterTasks(),
    10: () => addTag(),
    11: () => addSubtask(),
    12: () => addDueDate(),
    13: () => clearCompleted(),
    14: () => showHighPriority(),
    15: () => viewStats(),
    16: () => closeApp(),
  };
  lookup[val]?.();
}
