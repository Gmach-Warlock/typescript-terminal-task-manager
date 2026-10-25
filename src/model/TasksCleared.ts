import { Task } from "./Task.js";

export class TasksCleared {
  #tasksDeleted: number;
  #taskCompleted: number;
  #completedArray: Task[];

  constructor() {
    this.#taskCompleted = 0;
    this.#tasksDeleted = 0;
    this.#completedArray = [];
  }
  // getters
  get tasksCompleted(): number {
    return this.#taskCompleted;
  }
  get tasksDeleted(): number {
    return this.#tasksDeleted;
  }
  // setters
  set tasksCompleted(newNum: number) {
    this.#taskCompleted = newNum;
  }
  set tasksDeleted(newNum: number) {
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
  pushToCompletedArray(task: Task) {
    this.#completedArray.push(task);
  }
}
