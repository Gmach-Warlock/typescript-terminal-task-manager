import { getStringInput, getNumericInput } from "./terminal.js";
import { getInfoQuestion } from "../tasks/taskHelpers1.js";
import type { Priority, PropToModify, TCategory } from "../../types/types.js";
import { tStore } from "../../model/state/TStore.js";
import { tCleared } from "../../model/stats/TCleared.js";

export function titleExistsSomewhere(title: string) {
  if (tStore.tasks.some((task) => task.title === title)) return true;
  if (tCleared.completedTasks.some((task) => task.title === title)) return true;
  if (tCleared.deletedTasks.some((task) => task.title === title)) return true;
  return false;
}

export async function getAddInfo() {
  const arr = tStore.tasks;
  let answered = false;
  let title = "";
  while (!answered) {
    title = await getStringInput(getInfoQuestion("add", "title"));
    if (titleExistsSomewhere(title)) {
      console.log(
        "A task with that Title already exists. Please choose another title",
      );
      continue;
    }
    answered = true;
  }

  const description: string = await getStringInput(
    getInfoQuestion("add", "description"),
  );
  const priority = await getPriority();
  if (!priority) {
    throw new Error("Invalid priority value");
  }
  const category = await getCategory();
  if (!category) {
    throw new Error("Invalid Category");
  }
  return { title, description, priority, category };
}

export async function getEditInfo() {
  const key = await getNumericInput(
    `
Which property do you want to modify? 

1. Title
2. Description
3. Priority

Please choose the appropriate value: `,
    3,
  );
  const lookup: Record<number, Partial<PropToModify>> = {
    1: "title",
    2: "description",
    3: "priority",
  };
  if (!key) {
    console.log("failed in getEditInfo");
    return;
  }
  const propToEdit = lookup[key];
  const newValue =
    propToEdit !== "priority"
      ? await getStringInput("What is the new value? ")
      : await getPriority(false);
  return { propToEdit, newValue };
}

export async function getPriority(adding: boolean = true) {
  const key = await getNumericInput(
    `
What is the ${!adding ? "new " : ""}priority of the ${adding ? "new " : ""}task? 

1. Low
2. Medium 
3. High

Please enter the appropriate value: `,
    3,
  );
  const lookup: Record<number, Priority> = {
    1: "Low",
    2: "Medium",
    3: "High",
  };
  return lookup[key];
}

export async function getCategory(adding: boolean = true) {
  const key = await getNumericInput(
    `
What is the ${!adding ? "new" : ""} category of the ${adding ? "new" : ""} Task? 

1. Work
2. Home
3. Health
4. Personal
5. Other 

Please enter the appropriate value: `,
    5,
  );

  const lookup: Record<number, TCategory> = {
    1: "Work",
    2: "Home",
    3: "Health",
    4: "Personal",
    5: "Other",
  };

  return lookup[key];
}
