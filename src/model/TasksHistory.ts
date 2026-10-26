import { recreateTasks } from "../controller/files/fileFactories.js";
import { fillStats } from "../controller/files/FileHelpers.js";
import { denyAndReturn } from "../controller/terminal/terminal.js";
import type { StateObject } from "../types/interfaces.js";
import { mainMenu } from "../view/menu.js";
import { StateNode } from "./StateNode.js";
import { tStore } from "./TasksStore.js";
export class TasksHistory {
  #head: StateNode | null;
  #tail: StateNode | null;
  #currentNode: StateNode | null;
  #numOfTStates: number;
  #stateMap: Map<string, StateNode>;
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
    if (this.#tail.previous === this.#head && this.#head.next === this.#tail) {
      this.#head.next = newNode;
      newNode.previous = this.#head;
      newNode.next = this.#tail;
      this.#tail.previous = newNode;
      this.#numOfTStates++;
      this.#stateMap.set(state.timeChanged, newNode);
      this.#currentNode = newNode;

      console.log("addNewTasksState", this.#currentNode.data);
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
      this.#currentNode = newNode;
      console.log("addNewTasksState", this.currentN);
    }
  }
  logStates() {
    let current = this.#tail?.previous;
    if (!current) return;
    while (current.previous !== null && current.previous !== undefined) {
      console.log(current.data);
      current = current.previous;
    }
    console.log(`-------------------------------------------`);
  }

  redo() {
    if (this.#currentNode?.next) {
      this.#currentNode = this.#currentNode.next;
      const taskArray = recreateTasks(this.#currentNode.data.newTasksState);
      const statsObj = this.#currentNode.data.newStatsState;
      console.log("Going forward again in redo. ", taskArray, statsObj);
      fillStats(statsObj);
      tStore.setTasks(taskArray, "redo");
      return;
    }
    denyAndReturn("You are at the current state. State remains unchanged.");
    return;
  }
  undo() {
    if (this.#currentNode?.previous === this.#head) {
      denyAndReturn("There is nothing to undo. State remains unchanged.");
      return;
    }
    if (this.#currentNode?.previous) {
      this.#currentNode = this.#currentNode.previous;
      const taskArray = recreateTasks(this.#currentNode.data.newTasksState);
      const statsObj = this.#currentNode.data.newStatsState;
      console.log(
        "We are attempting to go back in time here in undo. ",
        taskArray,
        statsObj,
      );
      fillStats(statsObj);
      tStore.setTasks(taskArray, "undo");
      return;
    }
    denyAndReturn("Nothing to undo. State remains unchanged.");
    return;
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
