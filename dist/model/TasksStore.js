import fs from "node:fs";
import { myListener } from "../controller/listeners/listener.js";
export const listenersArray = [myListener];
export class TasksStore {
    #tasks;
    #listeners;
    constructor() {
        this.#tasks = [];
        this.#listeners = [];
        listenersArray.forEach((listener) => this.subscribe(listener));
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
    getTaskObjects() {
        const objArr = this.#tasks.map((task) => task.toObject());
        console.log(objArr);
        return objArr;
    }
    loadTasks() {
        try {
            if (fs.existsSync("/data/tasks.json")) {
                const data = fs.readFileSync("../../data/tasks.json", "utf8");
                if (!data)
                    throw new Error("tasks not found.");
                return JSON.parse(data);
            }
        }
        catch (error) {
            console.error("Could not load tasks. Re-initializing");
        }
    }
    saveTasks() {
        try {
            const tasks = tStore.getTaskObjects();
            console.log(tasks);
            const convertedData = JSON.stringify(tasks);
            const callBack = () => console.log("data", convertedData);
            fs.writeFile("../../../data/tasks.json", convertedData, callBack);
        }
        catch (error) {
            console.error(error);
        }
    }
    setTasks(newTasks, purpose) {
        this.#tasks = newTasks;
        this.notify(purpose);
    }
    subscribe(listener) {
        this.#listeners.push(listener);
    }
    notify(purpose) {
        this.#listeners.forEach((listener) => listener(purpose));
    }
}
export const tStore = new TasksStore();
//# sourceMappingURL=TasksStore.js.map