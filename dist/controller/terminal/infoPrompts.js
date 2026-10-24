import { getStringInput, getNumericInput } from "./terminal.js";
import { getInfoQuestion } from "../tasks/taskHelpers1.js";
export async function getAddInfo() {
    const title = await getStringInput(getInfoQuestion("add", "title"));
    const description = await getStringInput(getInfoQuestion("add", "description"));
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
    const key = await getNumericInput(`
Which property do you want to modify? 

1. Title
2. Description
3. Priority

Please choose the appropriate value: 
`, 3);
    const lookup = {
        1: "title",
        2: "description",
        3: "priority",
    };
    if (!key) {
        console.log("failed in getEditInfo");
        return;
    }
    const propToEdit = lookup[key];
    const newValue = propToEdit !== "priority"
        ? await getStringInput("What is the new value? ")
        : await getPriority(false);
    return { propToEdit, newValue };
}
export async function getPriority(adding = true) {
    const key = await getNumericInput(`
What is the ${!adding ? "new " : ""}priority of the ${adding ? "new " : ""}task? 

1. Low
2. Medium 
3. High

Please enter the appropriate value: 
    `, 3);
    const lookup = {
        1: "Low",
        2: "Medium",
        3: "High",
    };
    return lookup[key];
}
export async function getCategory(adding = true) {
    const key = await getNumericInput(`
What is the ${!adding ? "new" : ""} category of the ${adding ? "new" : ""} Task? 

1. Work
2. Home
3. Health
4. Personal
5. Other `, 5);
    const lookup = {
        1: "Work",
        2: "Home",
        3: "Health",
        4: "Personal",
        5: "Other",
    };
    return lookup[key];
}
//# sourceMappingURL=infoPrompts.js.map