import type { TDue } from "./TDue.js";

export class TDates {
  #dues: TDue[];

  constructor() {
    this.#dues = [];
  }

  get dues() {
    return this.#dues;
  }
  set dates(newDates: TDue[]) {
    this.#dues = newDates;
  }

  addDDate(due: TDue) {
    this.#dues = [...this.#dues, due];
  }

  logDate(due: TDue) {
    if (this.#dues.some((date) => date.tTitle === due.tTitle)) {
      console.log(`Due by ${due.stringDate}`);
    }
  }
}

export const tDates = new TDates();
