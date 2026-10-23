import type { Purpose, PropToModify } from "../../types/types.js";

export function getInfoQuestion(purpose: Purpose, prop: PropToModify) {
  const lookup: Record<Purpose, string> = {
    add: `Please give the new task a ${prop}: `,
    edit: `What is the ${prop} of the task to edit? `,
    delete: `What is the ${prop} of the task to delete? `,
    complete: `What is the ${prop} of the task to mark complete? `,
    incomplete: `What is the ${prop} of the task to mark incomplete? `,
    replace: `What is the new ${prop} of the task? `,
  };
  const question: string = lookup[purpose];

  return question;
}
export function addElementToArray<T>(arr: T[], element: T) {
  return [...arr, element];
}

export function returnObjInArray<Type extends object, Key extends keyof Type>(
  arr: Type[],
  prop: Key,
  value: string,
) {
  const copy = [...arr];
  const foundItem = copy.find((item) => item[prop] === value);
  if (!foundItem) {
    return undefined;
  }
  return foundItem;
}

export function editItemInArray<
  Type extends object,
  FindKey extends keyof Type,
  EditKey extends keyof Type,
>(
  arr: Type[],
  propToFind: FindKey,
  findVal: string,
  propToEdit: EditKey,
  newVal: Type[EditKey],
) {
  const copy = [...arr];
  const foundItem = returnObjInArray(copy, propToFind, findVal);
  if (!foundItem) {
    console.log("Item not found: editItem in Array");
    return;
  }
  foundItem[propToEdit] = newVal;
  return copy;
}

export function removeItemInArray<Type extends object, Key extends keyof Type>(
  arr: Type[],
  propToFind: Key,
  findVal: string,
) {
  const foundItem = returnObjInArray(arr, propToFind, findVal);
  if (!foundItem) {
    return;
  }
  const edittedCopy = arr.filter((item) => item[propToFind] !== findVal);
  return edittedCopy;
}
