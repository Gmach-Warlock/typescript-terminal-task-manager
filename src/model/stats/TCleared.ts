import { Task } from "../task/Task.js";

export class TCleared {
  #deleted: number;
  #completed: number;
  #completedTasks: Task[];
  #deletedTasks: Task[];
  constructor() {
    this.#completed = 0;
    this.#deleted = 0;
    this.#completedTasks = [];
    this.#deletedTasks = [];
  }
  // getters
  get completed(): number {
    return this.#completed;
  }
  get deleted(): number {
    return this.#deleted;
  }
  get completedTasks() {
    return this.#completedTasks;
  }
  get deletedTasks() {
    return this.#deletedTasks;
  }
  // setters
  set completed(newNum: number) {
    this.#completed = newNum;
  }
  set deleted(newNum: number) {
    this.#deleted = newNum;
  }
  set completedTasks(newArray: Task[]) {
    this.#completedTasks = newArray;
  }
  set deletedTasks(newArray: Task[]) {
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
  addToCompletedTasks(task: Task) {
    this.#completedTasks.push(task);
  }
  addToDeletedTasks(task: Task) {
    this.#deletedTasks.push(task);
  }
  logCleared() {
    console.log(`Completed: ${this.#completed}`);
    console.log(`Deleted: ${this.#deleted}`);
  }
}

export const tCleared = new TCleared();
