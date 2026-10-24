import { mainMenu } from "../../view/menu.js";
import { logStats, logTasks } from "../terminal/taskPrompts.js";
import { tStore } from "../../model/TasksStore.js";
import type { Purpose } from "../../types/types.js";

export function myListener(purpose: Partial<Purpose>) {
  const lookup: Partial<Record<Purpose, string>> = {
    add: "A task has been added successfully.",
    delete: "A task has been successfully deleted.",
    edit: "A task has successfully been editted.",
    complete: "A task has been marked complete",
    incomplete: "A task has been marked incomplete",
    subtask: "A subtask has been added to the task.",
    tag: "A tag has been added to the task",
  };
  const response = lookup[purpose];
  setTimeout(() => {
    // console.clear();
    console.log(`Tasks have been updated. ${response}`);
    logTasks(tStore.tasks);
    logStats();
    mainMenu();
  }, 500);
}
