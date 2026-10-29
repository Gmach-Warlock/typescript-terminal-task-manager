import { getNumericInput, getStringInput } from "./terminal.js";
import { getInfoQuestion, returnObjInArray } from "../tasks/taskHelpers1.js";
import { logNotFound } from "../../view/menu.js";
import { getPriority } from "./infoPrompts.js";
import { tStore } from "../../model/state/TStore.js";
export async function getSubTaskInfo() {
    const arr = tStore.tasks;
    const title = await getStringInput(getInfoQuestion("subtask", "title"));
    const itemToEdit = returnObjInArray(arr, "title", title);
    if (!itemToEdit) {
        logNotFound();
        return;
    }
    const STTitle = await getStringInput(`What is the title of the new subtask? `);
    const STDescription = await getStringInput(`Please give your new subtask a description: `);
    const STPriority = await getPriority();
    if (!STPriority)
        return;
    const obj = { title, STTitle, STDescription, STPriority };
    return obj;
}
//# sourceMappingURL=otherPrompts.js.map