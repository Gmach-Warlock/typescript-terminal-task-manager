import { getStringInput, getNumericInput } from "./terminal.js";
import { getInfoQuestion } from "../tasks/taskHelpers1.js";
import type { Priority } from "../../types/types.js";

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
