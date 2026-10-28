import type { DueDate } from "../../types/interfaces.js";
import type { Task } from "./Task.js";
import { TDue } from "./TDue.js";

export class TDates {
  #dues: TDue[];

  constructor() {
    this.#dues = [];
  }

  get dues() {
    return this.#dues;
  }
  set dues(newDues: TDue[]) {
    this.#dues = newDues;
  }

  addDDate(due: DueDate) {
    const dueDate = new TDue(due);
    this.#dues = [...this.#dues, dueDate];
  }

  logDate(task: Task) {
    if (this.#dues.some((dDate: TDue) => dDate.tTitle === task.title)) {
      const foundDue = this.#dues.find(
        (dueDate) => dueDate.tTitle === task.title,
      );

      if (foundDue) {
        console.log(`Due by: ${foundDue.stringDate}`);
        return foundDue.stringDate;
      }
    }
  }
  // need to figure out how to store and hydrate these
  hydrate(tasksArr: Task[]) {}
}

export const tDates = new TDates();
