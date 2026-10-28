import { tDates } from "./TDates.js";
import { tBank } from "../tChildren/TSubsBank.js";
export function timeStamp() {
    const newDate = new Date();
    const formatted = new Intl.DateTimeFormat("en-us", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }).format(newDate);
    return formatted;
}
export class Task {
    #id;
    #title;
    #description;
    #priority;
    #completed;
    #createdAt;
    #category;
    #tags;
    constructor(title, description, priority, category, 
    // repopulation
    id, completed, createdAt, tags) {
        this.#id = id ? id : crypto.randomUUID();
        this.#title = title;
        this.#description = description;
        this.#priority = priority;
        this.#completed = completed ? completed : false;
        this.#category = category;
        this.#createdAt = createdAt ? createdAt : timeStamp();
        this.#tags = tags ? tags : [];
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
            dueDate: tDates.logDate(this) ?? "",
            subtasks: Object.values(tBank.returnSubTasks(this) ?? []),
            tags: this.tags,
        };
    }
}
//# sourceMappingURL=Task.js.map