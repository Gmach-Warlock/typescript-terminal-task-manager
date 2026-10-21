export class TasksCompleted {
    #complete;
    #incomplete;
    constructor() {
        this.#complete = 0;
        this.#incomplete = 0;
    }
    // getters
    get complete() {
        return this.#complete;
    }
    get incomplete() {
        return this.#incomplete;
    }
    // setters
    set complete(newComplete) {
        this.#complete = newComplete;
    }
    set incomplete(newIncomplete) {
        this.#incomplete = newIncomplete;
    }
}
//# sourceMappingURL=TasksCompleted.js.map