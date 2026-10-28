import { TDue } from "./TDue.js";
export class TDates {
    #dues;
    constructor() {
        this.#dues = [];
    }
    get dues() {
        return this.#dues;
    }
    set dues(newDues) {
        this.#dues = newDues;
    }
    addDDate(due) {
        const dueDate = new TDue(due);
        this.#dues = [...this.#dues, dueDate];
    }
    logDate(task) {
        if (this.#dues.some((dDate) => dDate.tTitle === task.title)) {
            const foundDue = this.#dues.find((dueDate) => dueDate.tTitle === task.title);
            if (foundDue) {
                console.log(`Due by: ${foundDue.stringDate}`);
                return foundDue.stringDate;
            }
        }
    }
    // need to figure out how to store and hydrate these
    hydrate(tasksArr) { }
}
export const tDates = new TDates();
//# sourceMappingURL=TDates.js.map