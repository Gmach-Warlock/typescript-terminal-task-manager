import { Tag } from "./Tag.js";
import { Task } from "../task/Task.js";
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
        if (!this.#tags.some((tag) => tag.id === tag.id))
            this.#tags = [...this.#tags, tag];
    }
    logTags(task) {
        const tags = [];
        this.#tags.forEach((tag) => {
            if (tag.taskTitles.find((title) => title === task.title)) {
                tags.push(`#${tag.name} `);
            }
        });
        if (tags.length > 0)
            console.log(`Tags: ${tags}`);
    }
}
export const tTags = new TTags();
//# sourceMappingURL=TTags.js.map