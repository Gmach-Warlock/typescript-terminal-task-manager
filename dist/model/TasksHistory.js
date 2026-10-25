import { StateNode } from "./StateNode.js";
export class TasksHistory {
    #head;
    #tail;
    #numOfTStates;
    #stateMap;
    #createDummies() {
        this.#head = new StateNode({
            timeChanged: "N/A",
            newState: [],
            typeOfLastChange: "add",
        });
        this.#tail = new StateNode({
            timeChanged: "N/A",
            newState: [],
            typeOfLastChange: "add",
        });
        this.#head.next = this.#tail;
        this.#tail.previous = this.#head;
    }
    constructor() {
        this.#head = null;
        this.#tail = null;
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
}
export const tHistory = new TasksHistory();
//# sourceMappingURL=TasksHistory.js.map