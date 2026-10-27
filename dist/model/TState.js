import { recreateTasks } from "../controller/files/fileFactories.js";
import { createINode, redoState, } from "../controller/history/historyHelpers.js";
import { denyAndReturn } from "../controller/terminal/terminal.js";
import { TNode } from "./TNode.js";
import { tStore } from "./TasksStore.js";
import { fillStats } from "../controller/files/FileHelpers.js";
export class TState {
    #head;
    #tail;
    #current;
    #numOfStates;
    constructor() {
        this.#numOfStates = 0;
        const newHead = createINode();
        const newTail = createINode();
        const newNode = createINode();
        this.#head = newHead;
        this.#tail = newTail;
        this.#head.prev = null;
        this.#tail.next = null;
        this.#current = newNode;
        this.#head.next = newNode;
        this.#tail.prev = newNode;
        newNode.next = this.#tail;
        newNode.prev = this.#head;
    }
    get numOfState() {
        return this.#numOfStates;
    }
    set numOfState(newNum) {
        this.#numOfStates = newNum;
    }
    addState(state) {
        if (this.#head === null || this.#tail === null)
            return;
        const newNode = new TNode(state);
        const anchor = this.#current || this.#tail.prev;
        if (anchor && (anchor.next === this.#tail || anchor === this.#tail.prev)) {
            console.log("in addState", newNode.data, anchor.data);
            this.#tail.prev = newNode;
        }
        // slip the new node in between
        if (anchor) {
            const nextNode = anchor.next;
            newNode.next = nextNode;
            if (nextNode)
                nextNode.prev = anchor;
            anchor.next = newNode;
        }
        this.#current = newNode;
        newNode.prev = anchor;
        this.numOfState++;
        this.logState();
    }
    logState() {
        const prev = this.#current?.prev;
        console.log("head: ", this.#head?.data);
        console.log("tail: ", this.#tail?.data);
        console.log("current: ", this.#current?.data);
        console.log("current.prev", prev?.data);
    }
    moveLeft() {
        if (this.#current?.prev && this.#current?.prev === this.#head) {
            denyAndReturn("You are at initial state. No changes made.");
            return;
        }
        this.#current = this.#current?.prev ?? null;
    }
    moveRight() {
        if (this.#current?.next && this.#current?.next === this.#tail) {
            denyAndReturn("You are at the most recent state. No changes made.");
            return;
        }
        this.#current = this.#current?.next ?? null;
    }
    redo() {
        redoState();
    }
    undo() {
        console.log("before we begin in undo ", this.#current?.data, this.#current?.prev?.data);
        this.moveLeft();
        console.log("in undo. moved left ", this.#current?.data, this.#current?.prev?.data);
        if (!this.#current)
            return;
        const tasksArray = recreateTasks(this.#current.data.tasksState);
        const statsObj = this.#current.data.statsState;
        console.log("Were attempting to go back in time in undo", statsObj);
        this.logState();
        fillStats(statsObj);
        tStore.setTasks(tasksArray, "undo");
    }
}
export const tState = new TState();
//# sourceMappingURL=TState.js.map