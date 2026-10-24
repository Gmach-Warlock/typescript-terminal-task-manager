export class TasksCompletes {
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
    incComplete() {
        this.#complete++;
    }
    decComplete() {
        this.#complete--;
    }
    incIncomplete() {
        this.#incomplete++;
    }
    decIncomplete() {
        this.#incomplete--;
    }
    logCompletes() {
        console.log(`Complete: ${this.#complete}
Incomplete: ${this.incomplete}`);
    }
}
export const tCompletes = new TasksCompletes();
//# sourceMappingURL=TasksCompletes.js.map