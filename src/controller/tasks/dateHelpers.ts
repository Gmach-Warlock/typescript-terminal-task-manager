import { Task } from "../../model/Task.js";
import { tStore } from "../../model/TasksStore.js";
import type { DueDate } from "../../types/interfaces.js";
import type { Month } from "../../types/types.js";
import { logNotFound, mainMenu } from "../../view/menu.js";
import { getDueDateInfo } from "../terminal/datePrompts.js";
import { logTasks } from "../terminal/taskPrompts.js";
import { getStringInput } from "../terminal/terminal.js";
import { editItemInArray, getInfoQuestion } from "./taskHelpers1.js";

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
  const infoObj: DueDate | undefined = rawInfo
    ? { ...rawInfo, day: Number(rawInfo.day) }
    : undefined;

  if (!infoObj) {
    console.log("Problem getting due date");
    return;
  }
  const key: Record<number, Month> = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  // need to add due date to task
  const dateString: string = `${key[infoObj.month]} ${infoObj.day} ${infoObj.year}`;
  const newArray = editItemInArray(
    arr,
    itemToEdit,
    "id",
    "dueDate",
    dateString,
  );
  if (!newArray) {
    console.log("edit item failed in getDueDateInfo");
    return;
  }
  tStore.setTasks(newArray, "dueDate");
  mainMenu();
}

export function changeDueDate() {
  //
}
