export class TCompletes {
    #complete;
    #incomplete;
    #completed;
    constructor() {
        this.#complete = 0;
        this.#incomplete = 0;
        this.#completed = 0;
    }
    // getters
    get complete() {
        return this.#complete;
    }
    get incomplete() {
        return this.#incomplete;
    }
    get completed() {
        return this.#completed;
    }
    // setters
    set complete(newComplete) {
        this.#complete = newComplete;
    }
    set incomplete(newIncomplete) {
        this.#incomplete = newIncomplete;
    }
    set completed(newCompleted) {
        this.#completed = newCompleted;
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
Incomplete: ${this.incomplete} `);
    }
}
export const tCompletes = new TCompletes();
//# sourceMappingURL=TCompletes.js.map