import { timeStamp } from "../task/Task.js";
import { Task } from "../task/Task.js";
export class Tag {
    #id;
    #tag;
    #createdAt;
    #tasksUsing;
    constructor(tag) {
        this.#id = crypto.randomUUID();
        this.#tag = tag;
        this.#createdAt = timeStamp();
        this.#tasksUsing = [];
    }
    get id() {
        return this.#id;
    }
    get tag() {
        return this.#tag;
    }
    get createdAt() {
        return this.#createdAt;
    }
    get tasksUsing() {
        return this.#tasksUsing;
    }
    set tag(newTag) {
        this.#tag = newTag;
    }
    set users(newUsers) {
        this.#tasksUsing = newUsers;
    }
    addTagUser(task) {
        this.#tasksUsing = [...this.#tasksUsing, task];
    }
}
//# sourceMappingURL=Tag.js.map