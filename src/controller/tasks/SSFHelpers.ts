import type { Task } from "../../model/Task.js";
import { tStore } from "../../model/TasksStore.js";
import type { SearchProp } from "../../types/types.js";
import { getFilterTypePrompt } from "../terminal/ssfPrompts.js";
import { getNumericInput, getStringInput } from "../terminal/terminal.js";
import { viewTasks } from "./CRUDHelpers.js";
import { returnFilterArray, returnSearchArray } from "./taskHelpers2.js";

export async function searchTasks() {
  const arr: Task[] = tStore.tasks;
  const searchTerm = await getStringInput(
    `What is the term to search for? `,
    false,
  );
  const searchPropKey = await getNumericInput(
    `
Which property are we searching in?  

1. Title
2. Description

Please choose the appropriate value:  
`,
    2,
  );
  const lookup: Record<number, SearchProp> = {
    1: "title",
    2: "description",
  };
  const searchProp = lookup[searchPropKey];
  console.log("searching ...", searchTerm);
  if (!searchTerm || !searchProp) {
    console.log("Missing params in searchTasks");
    return;
  }
  const searchArray = returnSearchArray(arr, searchProp, searchTerm);
  if (!searchArray) {
    console.log("missing searchArray in searchTasks. ");
    return;
  }
  viewTasks(searchArray);
}

export async function filterTasks() {
  const arr: Task[] = tStore.tasks;
  const filterType = await getFilterTypePrompt();
  if (!filterType) {
    console.log("Something went wrong in filterTasks.");
    return;
  }
  const filterArray = returnFilterArray(arr, filterType);
  if (!filterArray) {
    console.log("Something went wrong in guard 2 of filterTasks");
    return;
  }
  viewTasks(filterArray);
}
