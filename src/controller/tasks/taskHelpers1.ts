import type { Purpose, PropToModify } from "../../types/types.js";

export function addElementToArray<T>(arr: T[], element: T) {
  return [...arr, element];
}

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
