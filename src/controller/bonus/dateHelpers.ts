import { Task } from "../../model/task/Task.js";
import { tStore } from "../../model/state/TStore.js";
import type { DueDate } from "../../types/interfaces.js";
import { logNotFound, mainMenu } from "../../view/menu.js";
import { getDueDateInfo } from "../terminal/datePrompts.js";
import { getStringInput } from "../terminal/terminal.js";
import { tDates } from "../../model/task/TDates.js";
import { getInfoQuestion } from "../tasks/taskHelpers1.js";

export async function addDueDate() {
  const arr = tStore.tasks;
  const title = await getStringInput(getInfoQuestion("dueDate", "title"));
  if (!title) {
    logNotFound();
  }
  const itemToEdit: Task | undefined = arr.find((item) => item.title === title);
  if (!itemToEdit) {
    logNotFound();
    return;
  }
  const rawInfo = await getDueDateInfo();
  const infoObj: DueDate | undefined = {
    taskTitle: title,
    day: Number(rawInfo?.day),
    month: Number(rawInfo?.month),
    year: Number(rawInfo?.year),
  };

  if (!infoObj) {
    console.log("Problem getting due date");
    return;
  }
  // need to add due date to task
  tDates.addDDate(infoObj);
  tStore.setTasks(tStore.tasks, "dueDate");
  mainMenu();
}

export function changeDueDate() {
  //
}
