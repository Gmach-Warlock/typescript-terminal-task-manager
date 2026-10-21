export class TasksStore {
    #tasks;
    #listeners;
    constructor() {
        this.#tasks = [];
        this.#listeners = [];
    }
    // getters
    get tasks() {
        return this.#tasks;
    }
    get listeners() {
        return this.#listeners;
    }
    // setters
    set tasks(newTasks) {
        this.#tasks = newTasks;
    }
    set listeners(newListerners) {
        this.#listeners = newListerners;
    }
    subscribe(listener) {
        this.#listeners.push(listener);
    }
    notify() {
        this.#listeners.forEach((listener) => listener());
    }
}
export const tStore = new TasksStore();
//# sourceMappingURL=TasksStore.js.map