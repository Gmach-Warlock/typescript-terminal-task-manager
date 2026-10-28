import { Tag } from "./Tag.js";
class TTags {
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
export const tTags = new TTags();
//# sourceMappingURL=TTags.js.map