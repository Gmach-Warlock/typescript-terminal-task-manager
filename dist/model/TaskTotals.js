export class TaskTotals {
    #total;
    #size;
    constructor() {
        this.#total = 0;
        this.#size = 0;
    }
    get total() {
        return this.#total;
    }
    get size() {
        return this.#size;
    }
    incTotal() {
        this.#total++;
    }
    decTotal() {
        this.#total--;
    }
    incSize() {
        this.#size++;
    }
    decSize() {
        this.#size--;
    }
}
export const tTotals = new TaskTotals();
//# sourceMappingURL=TaskTotals.js.map