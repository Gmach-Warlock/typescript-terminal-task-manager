export class TDates {
    #dues;
    constructor() {
        this.#dues = [];
    }
    get dues() {
        return this.#dues;
    }
    set dates(newDates) {
        this.#dues = newDates;
    }
    addDDate(due) {
        this.#dues = [...this.#dues, due];
    }
    logDate(due) {
        if (this.#dues.some((date) => date.tTitle === due.tTitle)) {
            console.log(`Due by ${due.stringDate}`);
        }
    }
}
export const tDates = new TDates();
//# sourceMappingURL=TDates.js.map