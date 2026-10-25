import { StateNode } from "./StateNode.js";
export class TasksHistory {
    #head;
    #tail;
    #currentN;
    #numOfTStates;
    #stateMap;
    #createDummies() {
        this.#head = new StateNode({
            timeChanged: "N/A",
            newTasksState: [],
            newStatsState: {
                size: 0,
                total: 0,
                complete: 0,
                incomplete: 0,
                completed: 0,
            },
            typeOfLastChange: "add",
        });
        this.#tail = new StateNode({
            timeChanged: "N/A",
            newTasksState: [],
            newStatsState: {
                size: 0,
                total: 0,
                complete: 0,
                incomplete: 0,
                completed: 0,
            },
            typeOfLastChange: "add",
        });
        this.#head.next = this.#tail;
        this.#tail.previous = this.#head;
    }
    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#currentN = null;
        this.#numOfTStates = 0;
        this.#stateMap = new Map();
        this.#createDummies();
    }
    addNewTasksState(state) {
        if (this.#tail === null || this.#head === null) {
            return;
        }
        const newNode = new StateNode(state);
        if (this.#tail.previous === this.#head && this.#head.next === this.#tail) {
            this.#head.next = newNode;
            newNode.previous = this.#head;
            newNode.next = this.#tail;
            this.#tail.previous = newNode;
            this.#numOfTStates++;
            this.#stateMap.set(state.timeChanged, newNode);
            this.#currentN = newNode;
            return;
        }
        const temp = this.#tail.previous;
        this.#tail.previous = newNode;
        if (temp) {
            newNode.previous = temp;
            temp.next = newNode;
            newNode.next = this.#tail;
            this.#numOfTStates++;
            this.#stateMap.set(state.timeChanged, newNode);
        }
    }
    logStates() {
        let current = this.#tail?.previous;
        if (!current)
            return;
        while (current.previous !== null && current.previous !== undefined) {
            console.log(current.data);
            current = current.previous;
        }
        console.log(`-------------------------------------------`);
    }
    redo() {
        if (this.#currentN?.next)
            this.#currentN = this.#currentN.next;
        // need to update tStore.setTasks(arr, "redo") connect these and save to file, and you're good :)
    }
    undo() {
        if (this.#currentN?.previous)
            this.#currentN = this.#currentN.previous;
        // need to update tStore.setTasks(arr, "undo");
    }
}
export const tHistory = new TasksHistory();
//# sourceMappingURL=TasksHistory.js.map