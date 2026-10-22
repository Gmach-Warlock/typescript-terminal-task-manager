import { getStringInput, getNumericInput } from "./terminal.js";
import { getInfoQuestion } from "../tasks/taskHelpers1.js";
export async function getAddInfo() {
    const title = await getStringInput(getInfoQuestion("add", "title"));
    const description = await getStringInput(getInfoQuestion("add", "description"));
    const priorityNum = await getNumericInput(`
${getInfoQuestion("add", "priority")}

1. Low
2. Medium
3. High

Please choose the appropriate value: 
    `, 3);
    const priorityLookup = {
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
//# sourceMappingURL=infoPrompts.js.map