import type { TasksSizeObj } from "../types/interfaces.js";

export class TasksSize {
  #size: number;
  #total: number;

  constructor() {
    this.#size = 0;
    this.#total = 0;
  }

  // gettters
  get size(): number {
    return this.#size;
  }
  get total(): number {
    return this.#total;
  }

  // setters
  set size(newSize: number) {
    this.#size = newSize;
  }
  set total(newTotal: number) {
    this.#total = newTotal;
  }
}

export const tSize: TasksSizeObj = new TasksSize();
