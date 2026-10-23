import type { TasksSizeObj } from "../types/interfaces.js";

export class TasksTotals {
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

  incSize() {
    this.#size++;
  }
  decSize() {
    this.#size--;
  }
  incTotal() {
    this.#total++;
  }
  decTotal() {
    this.#total--;
  }

  logTotals() {
    console.log(`
Size: ${this.#size},
Total: ${this.#total}`);
  }
}

export const tTotals: TasksTotals = new TasksTotals();
