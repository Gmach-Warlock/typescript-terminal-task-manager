import type { Subtask } from "./Subtask.js";

export class TSubtasks {
  #parent: string;
  #subtasks: Subtask[];
  constructor(parent: string) {
    this.#subtasks = [];
    this.#parent = parent;
  }
  get parent() {
    return this.#parent;
  }
  get subtasks() {
    return this.#subtasks;
  }
  set subtasks(newSubtasks: Subtask[]) {
    this.#subtasks = newSubtasks;
  }

  addSubtask(subtask: Subtask) {
    this.#subtasks = [...this.#subtasks, subtask];
  }
}
