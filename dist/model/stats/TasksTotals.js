export class TasksTotals {
    #size;
    #total;
    constructor() {
        this.#size = 0;
        this.#total = 0;
    }
    // gettters
    get size() {
        return this.#size;
    }
    get total() {
        return this.#total;
    }
    // setters
    set size(newSize) {
        this.#size = newSize;
    }
    set total(newTotal) {
        this.#total = newTotal;
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
export const tTotals = new TasksTotals();
//# sourceMappingURL=TasksTotals.js.map