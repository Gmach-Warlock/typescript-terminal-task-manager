import type { DueDate } from "../../types/interfaces.js";

export class TDue {
  #tTitle: string;
  #day: number;
  #month: number;
  #year: number;
  #stringDate: string;

  constructor(dueObj: DueDate) {
    this.#tTitle = dueObj.taskTitle;
    this.#year = dueObj.year;
    this.#month = dueObj.month;
    this.#day = dueObj.day;
    this.#stringDate = `${this.#day} ${this.#month} ${this.#year}`;
  }
  get tTitle() {
    return this.#tTitle;
  }
  get day() {
    return this.#day;
  }
  get month() {
    return this.#month;
  }
  get year() {
    return this.#year;
  }
  get stringDate() {
    return this.#stringDate;
  }
}
