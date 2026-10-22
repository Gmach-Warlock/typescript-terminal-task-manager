import { myListener } from "../controller/listeners/listener.js";
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
    setTasks(newTasks) {
        this.#tasks = newTasks;
        this.notify();
    }
    subscribe(listener) {
        this.#listeners.push(listener);
    }
    notify() {
        this.#listeners.forEach((listener) => listener());
    }
}
export const tStore = new TasksStore();
tStore.subscribe(myListener);
//# sourceMappingURL=TasksStore.js.map