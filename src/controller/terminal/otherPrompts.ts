import { getStringInput } from "./terminal.js";
import { getInfoQuestion, returnObjInArray } from "../tasks/taskHelpers1.js";
import { logNotFound } from "../../view/menu.js";
import { getPriority } from "./infoPrompts.js";
import { tStore } from "../../model/state/TStore.js";
import type { STInstanceInfo } from "../../types/interfaces.js";
import type { Priority } from "../../types/types.js";

export async function getSubTaskInfo() {
  const arr = tStore.tasks;
  const title = await getStringInput(getInfoQuestion("subtask", "title"));
  const itemToEdit = returnObjInArray(arr, "title", title);
  if (!itemToEdit) {
    logNotFound();
    return;
  }
  const STTitle = await getStringInput(
    `What is the title of the new subtask? `,
  );
  const STDescription = await getStringInput(
    `Please give your new subtask a description: `,
  );
  const STPriority: Priority | undefined = await getPriority();
  if (!STPriority) return;
  const obj: STInstanceInfo = { title, STTitle, STDescription, STPriority };
  return obj;
}
