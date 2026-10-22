import { getStringInput, getNumericInput } from "./terminal.js";
import { getInfoQuestion } from "../tasks/taskHelpers1.js";
import type { Priority, PropToModify } from "../../types/types.js";

export async function getAddInfo() {
  const title: string = await getStringInput(getInfoQuestion("add", "title"));
  const description: string = await getStringInput(
    getInfoQuestion("add", "description"),
  );
  const priorityNum: number = await getNumericInput(
    `
${getInfoQuestion("add", "priority")}

1. Low
2. Medium
3. High

Please choose the appropriate value: 
    `,
    3,
  );
  const priorityLookup: Record<number, Priority> = {
    1: "Low",
    2: "Medium",
    3: "High",
  };
  const priority = priorityLookup[priorityNum];
  if (!priority) {
    throw new Error("Invalid priority value");
  }
  return { title, description, priority };
}

export async function getEditInfo() {
  const key = await getNumericInput(
    `
Which property do you want to modify? 

1. Title
2. Description
3. Priority
    `,
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

  Please enter the appropriate value: 
    `,
    3,
  );
  const lookup: Record<number, Priority> = {
    1: "Low",
    2: "Medium",
    3: "High",
  };
  return lookup[key];
}
