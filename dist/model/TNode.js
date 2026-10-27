export class TNode {
    #data;
    #next;
    #prev;
    constructor(data) {
        this.#data = data;
        this.#next = null;
        this.#prev = null;
    }
    get data() {
        return this.#data;
    }
    get next() {
        return this.#next;
    }
    get prev() {
        return this.#prev;
    }
    set data(newData) {
        this.#data = newData;
    }
    set next(newNext) {
        this.#next = newNext;
    }
    set prev(newPrev) {
        this.#prev = newPrev;
    }
}
//# sourceMappingURL=TNode.js.map