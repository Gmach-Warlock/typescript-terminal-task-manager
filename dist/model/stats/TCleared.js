import { Task } from "../task/Task.js";
export class TCleared {
    #deleted;
    #completed;
    #completedTasks;
    #deletedTasks;
    constructor() {
        this.#completed = 0;
        this.#deleted = 0;
        this.#completedTasks = [];
        this.#deletedTasks = [];
    }
    // getters
    get completed() {
        return this.#completed;
    }
    get deleted() {
        return this.#deleted;
    }
    get completedTasks() {
        return this.#completedTasks;
    }
    get deletedTasks() {
        return this.#deletedTasks;
    }
    // setters
    set completed(newNum) {
        this.#completed = newNum;
    }
    set deleted(newNum) {
        this.#deleted = newNum;
    }
    set completedTasks(newArray) {
        this.#completedTasks = newArray;
    }
    set deletedTasks(newArray) {
        this.#deletedTasks = newArray;
    }
    incTCompleted() {
        this.#completed++;
    }
    incTDeleted() {
        this.#deleted++;
    }
    decTCompleted() {
        this.#completed--;
    }
    decTDeleted() {
        this.#deleted--;
    }
    addToCompletedTasks(task) {
        this.#completedTasks.push(task);
    }
    addToDeletedTasks(task) {
        this.#deletedTasks.push(task);
    }
    logCleared() {
        console.log(`Completed: ${this.#completed}`);
        console.log(`Deleted: ${this.#deleted}`);
    }
}
export const tCleared = new TCleared();
//# sourceMappingURL=TCleared.js.map