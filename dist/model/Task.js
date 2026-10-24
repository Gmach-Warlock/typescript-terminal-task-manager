export class Task {
    #id;
    #title;
    #description;
    #priority;
    #completed;
    #createdAt;
    constructor(title, description, priority) {
        this.#id = crypto.randomUUID();
        this.#title = title;
        this.#description = description;
        this.#priority = priority;
        this.#completed = false;
        this.#createdAt = new Date().toISOString();
    }
    // getters
    get id() {
        return this.#id;
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
    // setters
    set title(newTitle) {
        this.#title = newTitle;
    }
    set description(newDescription) {
        this.#description = newDescription;
    }
    set priority(newPriority) {
        this.#priority = newPriority;
    }
    set completed(newCompleted) {
        this.#completed = newCompleted;
    }
    // return the options
    toObject() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            priority: this.priority,
            completed: this.completed,
            createdAt: this.createdAt,
        };
    }
}
//# sourceMappingURL=Task.js.map