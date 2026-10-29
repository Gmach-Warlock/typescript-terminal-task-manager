import { tStore } from "../../model/state/TStore.js";
import { denyAndReturn, getStringInput } from "../terminal/terminal.js";
import { returnObjInArray, getInfoQuestion } from "../tasks/taskHelpers1.js";
import { logNotFound, mainMenu } from "../../view/menu.js";
import { editItemInArray, addElementToArray } from "../tasks/taskHelpers1.js";
import { Tag } from "../../model/tChildren/Tag.js";
import { tTags } from "../../model/tChildren/TTags.js";

export async function addTag() {
  const arr = tStore.tasks;
  const title = await getStringInput(getInfoQuestion("tag", "title"));

  const itemToEdit = returnObjInArray(arr, "title", title);
  if (!itemToEdit) {
    logNotFound();
    return;
  }
  let newTagName: string = await getStringInput(
    `What is the tag to add to this task? `,
  );
  if (!newTagName) {
    denyAndReturn("couldn't get tag");
    return;
  }
  const existingTag: Tag | undefined = tTags.tags.find(
    (tag) => tag.name === newTagName,
  );
  if (existingTag) {
    existingTag.addTagUserId(itemToEdit);
  }
  const newTag = new Tag(newTagName);
  newTag.addTagUserId(itemToEdit);
  tTags.addTag(newTag);

  tStore.setTasks(tStore.tasks, "tag");
  mainMenu();
}
