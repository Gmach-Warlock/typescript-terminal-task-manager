import { Task } from "../task/Task.js";
import type { TSubtasks } from "./TSubtasks.js";

class TSubsBank {
  #subBank: TSubtasks[];
  constructor() {
    this.#subBank = [];
  }

  get subBank() {
    return this.#subBank;
  }
  set subBand(newBank: TSubtasks[]) {
    this.#subBank = newBank;
  }

  addToBank(subtasks: TSubtasks) {
    this.#subBank = [...this.#subBank, subtasks];
  }

  logSubtasks(task: Task) {
    const foundSubTasks = this.#subBank.find(
      (subTasks: TSubtasks) => subTasks.parent === task.title,
    );
    if (foundSubTasks) {
      console.log("Subtasks: ");
      foundSubTasks.subtasks.forEach((subtask) => {
        console.log(`Title: ${subtask.title}
Description: ${subtask.description}
Priority: ${subtask.priority}
Completed: ${subtask.completed}
Created At: ${subtask.createdAt}`);
      });
      return foundSubTasks;
    }
    console.log("we didn't go in ", foundSubTasks);
  }
  returnSubTasks(task: Task): TSubtasks | undefined {
    const foundSTasks = this.#subBank.find(
      (subtasks: TSubtasks) => subtasks.parent === task.id,
    );

    return foundSTasks;
  }
}

export const tBank = new TSubsBank();
