import { timeStamp } from "../task/Task.js";
export class Subtask {
    #id;
    #parent;
    #title;
    #description;
    #priority;
    #createdAt;
    #completed;
    constructor(parent, title, description, priority, id, completed, createdAt) {
        this.#parent = parent;
        this.#title = title;
        this.#description = description;
        this.#priority = priority;
        this.#id = id ?? crypto.randomUUID();
        this.#createdAt = createdAt ?? timeStamp();
        this.#completed = completed ?? false;
    }
    get id() {
        return this.#id;
    }
    get parent() {
        return this.#parent;
    }
    get title() {
        return this.#title;
    }
    get description() {
        return this.#description;
    }
    get priority() {
        return this.#priority;
    }
    get completed() {
        return this.#completed;
    }
    get createdAt() {
        return this.#createdAt;
    }
    set parent(newParent) {
        this.#parent = newParent;
    }
    set title(newTitle) {
        this.#title = newTitle;
    }
    set description(newDesc) {
        this.#description = newDesc;
    }
    set priority(newPriority) {
        this.#priority = newPriority;
    }
    set completed(newCompleted) {
        this.#completed = newCompleted;
    }
}
//# sourceMappingURL=Subtask.js.map