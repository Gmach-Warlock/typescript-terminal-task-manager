import { Task } from "./Task.js";
export class TasksCleared {
    #tasksDeleted;
    #taskCompleted;
    #completedArray;
    constructor() {
        this.#taskCompleted = 0;
        this.#tasksDeleted = 0;
        this.#completedArray = [];
    }
    // getters
    get tasksCompleted() {
        return this.#taskCompleted;
    }
    get tasksDeleted() {
        return this.#tasksDeleted;
    }
    // setters
    set tasksCompleted(newNum) {
        this.#taskCompleted = newNum;
    }
    set tasksDeleted(newNum) {
        this.#tasksDeleted = newNum;
    }
    incTCompleted() {
        this.tasksCompleted++;
    }
    incTDeleted() {
        this.tasksDeleted++;
    }
    decTCompleted() {
        this.#taskCompleted--;
    }
    decTDeleted() {
        this.#tasksDeleted--;
    }
    pushToCompletedArray(task) {
        this.#completedArray.push(task);
    }
}
//# sourceMappingURL=TasksCleared.js.map