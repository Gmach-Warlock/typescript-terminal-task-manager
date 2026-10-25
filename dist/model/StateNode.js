export class StateNode {
    #data;
    #previous;
    #next;
    constructor(state) {
        this.#data = state;
        this.#previous = null;
        this.#next = null;
    }
    // getters
    get data() {
        return this.#data;
    }
    get previous() {
        return this.#previous;
    }
    get next() {
        return this.#next;
    }
    // setters
    set data(newData) {
        this.#data = newData;
    }
    set previous(newPrevious) {
        this.#previous = newPrevious;
    }
    set next(newNext) {
        this.#next = newNext;
    }
}
//# sourceMappingURL=StateNode.js.map