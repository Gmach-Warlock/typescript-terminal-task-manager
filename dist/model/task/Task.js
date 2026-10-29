import { tDates } from "./TDates.js";
import { tBank } from "../tChildren/TSubsBank.js";
import { tTags } from "../tChildren/TTags.js";
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
    constructor(title, description, priority, category, 
    // repopulation
    id, completed, createdAt) {
        this.#id = id ? id : crypto.randomUUID();
        this.#title = title;
        this.#description = description;
        this.#priority = priority;
        this.#completed = completed ? completed : false;
        this.#category = category;
        this.#createdAt = createdAt ? createdAt : timeStamp();
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
            tags: tTags.tags,
        };
    }
}
//# sourceMappingURL=Task.js.map