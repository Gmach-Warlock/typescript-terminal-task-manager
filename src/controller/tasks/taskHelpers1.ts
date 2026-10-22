import type { SimpleType } from "../../types/types.js";

export function addElementToArray<T>(arr: T[], element: T) {
  return [...arr, element];
}

const arr: SimpleType[] = [1, 2, 3, 4, "five"];
const element = false;

const newArray = addElementToArray(arr, element);
console.log(newArray);
