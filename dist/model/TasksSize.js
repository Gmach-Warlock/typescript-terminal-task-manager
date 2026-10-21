export class TasksSize {
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
}
export const tSize = new TasksSize();
//# sourceMappingURL=TasksSize.js.map