import { tStore } from "../../model/state/TStore.js";
import { getStringInput } from "../terminal/terminal.js";
import { returnObjInArray, getInfoQuestion } from "../tasks/taskHelpers1.js";
import { logNotFound, mainMenu } from "../../view/menu.js";
import { editItemInArray, addElementToArray } from "../tasks/taskHelpers1.js";

export async function addTag() {
  const arr = tStore.tasks;
  const title = await getStringInput(getInfoQuestion("tag", "title"));

  const itemToEdit = returnObjInArray(arr, "title", title);
  if (!itemToEdit) {
    logNotFound();
    return;
  }
  const newTag: string = await getStringInput(
    `What is the tag to add to this task? `,
  );
  if (!newTag) {
    console.log("Couldn't get tag");
    mainMenu();
  }
  const newTagsArray: string[] = addElementToArray(itemToEdit.tags, newTag);
  const newArray = editItemInArray(arr, itemToEdit, "id", "tags", newTagsArray);
  if (!newArray) {
    console.log("Array not obtained in addTagToTask");
    return;
  }
  tStore.setTasks(newArray, "tag");
  mainMenu();
}
