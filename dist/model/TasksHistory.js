export {};
/* import { recreateTasks } from "../controller/files/fileFactories.js";
import { fillStats } from "../controller/files/FileHelpers.js";
import {
  createINode,
  createIState,
} from "../controller/history/historyHelpers.js";
import { denyAndReturn } from "../controller/terminal/terminal.js";
import type { StateObject } from "../types/interfaces.js";
import { StateNode } from "./StateNode.js";
import { tStore } from "./TasksStore.js";
export class TasksHistory {
  #head: StateNode | null;
  #tail: StateNode | null;
  #currentNode: StateNode | null;
  #numOfTStates: number;
  #stateMap: Map<string, StateNode>;
  #createDummies() {
    const newHead: StateNode = createINode();
    const newTail: StateNode = createINode();
    const newNode: StateNode = createINode();
    const newInitial: StateObject = createIState();
    this.#head = newHead;
    this.#tail = newTail;
    this.#currentNode = newNode;
    this.#head.next = newNode;
    this.#tail.previous = newNode;
    newNode.previous = this.#head;
    newNode.next = this.#tail;
    this.addNewTasksState(newInitial);
  }
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#currentNode = null;
    this.#numOfTStates = 0;
    this.#stateMap = new Map();
    this.#createDummies();
  }

  get currentN() {
    return this.#currentNode;
  }
  set currentN(newCurrentN: StateNode | null) {
    this.#currentNode = newCurrentN;
  }
  get numOfStates() {
    return this.#numOfTStates;
  }
  set numOfStates(newNum: number) {
    this.#numOfTStates = newNum;
  }

  addNewTasksState(state: StateObject) {
    if (this.#tail === null || this.#head === null) {
      return;
    }
    const newNode = new StateNode(state);

    const anchor = this.#currentNode || this.#head;
    newNode.previous = anchor;
    newNode.next = this.#tail;
    anchor.next = newNode;
    this.#tail.previous = newNode;

    this.#numOfTStates++;
    this.#stateMap.set(state.timeChanged, newNode);
    this.#currentNode = newNode;
  }
  logStates() {
    let current = this.#tail?.previous;
    if (!current) return;
    while (current.previous !== null && current.previous !== this.#head) {
      console.log(current.data);
      current = current.previous;
    }
    console.log(`-------------------------------------------`);
  }

  redo() {
    if (this.#currentNode?.next) {
      this.#currentNode = this.#currentNode.next;
      const taskArray = recreateTasks(this.#currentNode.data.tasksState);
      const statsObj = this.#currentNode.data.statsState;
      console.log("Going forward again in redo. ", taskArray, statsObj);
      fillStats(statsObj);
      tStore.setTasks(taskArray, "redo");
      return;
    }
    denyAndReturn("You are at the current state. State remains unchanged.");
    return;
  }
  undo() {
    if (this.currentN?.previous && this.#currentNode?.previous === this.#head) {
      denyAndReturn("There is nothing to undo. State remains unchanged.");
      console.log("in undo in tasksHistory", this.#currentNode.data);
      return;
    }
    console.log("in undo", this.#currentNode?.data ?? null);
    this.#currentNode = this.#currentNode?.previous ?? null;
    const currentNode = this.#currentNode;
    if (!currentNode) return;
    //console.log("checkout your tasks in undo", currentNode.data.tasksState);
    const tasksArray = recreateTasks(currentNode.data.tasksState);
    console.log("Did we get our array?", tasksArray);
    tasksArray.forEach((task) => console.log(task.id));
    const statsObj = currentNode.data.statsState;
    console.log(
      "Were attempting to go back in time in undo",
      tasksArray,
      statsObj,
    );
    this.logStates();
    fillStats(statsObj);
    tStore.setTasks(tasksArray, "undo");
  }

  makeObj() {
    return {
      head: this.#head,
      tail: this.#tail,
      currentN: this.#currentNode,
      numOfStates: this.#numOfTStates,
      stateMap: this.#stateMap,
    };
  }
}

export const tHistory = new TasksHistory();
 */
//# sourceMappingURL=TasksHistory.js.map