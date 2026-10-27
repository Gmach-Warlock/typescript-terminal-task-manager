export class TTags {
    #tags;
    constructor() {
        this.#tags = [];
    }
    get tags() {
        return this.#tags;
    }
    set tags(newTags) {
        this.#tags = newTags;
    }
    addTag(tag) {
        this.#tags = [...this.#tags, tag];
    }
}
//# sourceMappingURL=TTags.js.map