import type { DueDate } from "../../types/taskInterfaces.js";
import type { Month } from "../../types/types.js";
export class TDue {
  #tTitle: string;
  #day: number;
  #month: number;
  #year: number;
  #stringDate: string;

  constructor(dueObj: DueDate) {
    const key: Record<number, Month> = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };
    this.#tTitle = dueObj.taskTitle;
    this.#year = dueObj.year;
    this.#month = dueObj.month;
    this.#day = dueObj.day;
    this.#stringDate = `${key[this.#month]} ${this.#day}, ${this.#year}`;
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
