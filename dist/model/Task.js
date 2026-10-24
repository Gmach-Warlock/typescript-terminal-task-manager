export class Task {
    #id;
    #title;
    #description;
    #priority;
    #completed;
    #createdAt;
    #category;
    #subtasks;
    #tags;
    constructor(title, description, priority, category) {
        this.#id = crypto.randomUUID();
        this.#title = title;
        this.#description = description;
        this.#priority = priority;
        this.#completed = false;
        this.#category = category;
        this.#createdAt = new Date().toISOString();
        this.#subtasks = [];
        this.#tags = [];
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
    get category() {
        return this.#category;
    }
    get tags() {
        return this.#tags;
    }
    get subtasks() {
        return this.subtasks;
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
    set category(newCategory) {
        this.#category = newCategory;
    }
    set tags(newTags) {
        this.#tags = newTags;
    }
    set subTasks(newSubtasks) {
        this.#subtasks = newSubtasks;
    }
    addSubtaskToTask(subtask) {
        this.#subtasks.push(subtask);
    }
    addTagToTask(tag) {
        this.#tags.push(tag);
    }
    logTags() {
        this.#tags.forEach((tag) => console.log(`Tag: ${tag}`));
    }
    // return the options
    toObject() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            category: this.category,
            priority: this.priority,
            completed: this.completed,
            createdAt: this.createdAt,
        };
    }
}
//# sourceMappingURL=Task.js.map