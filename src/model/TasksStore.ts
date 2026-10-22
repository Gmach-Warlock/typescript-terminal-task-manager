import type { Listener } from "../types/types.js";
import type { TasksStoreObj } from "../types/interfaces.js";
import type { Task } from "./Task.js";
import { myListener } from "../controller/listeners/listener.js";

export class TasksStore {
  #tasks: Task[];
  #listeners: Listener[];

  constructor() {
    this.#tasks = [];
    this.#listeners = [];
  }

  // getters
  get tasks(): Task[] {
    return this.#tasks;
  }
  get listeners(): Listener[] {
    return this.#listeners;
  }

  // setters
  set tasks(newTasks: Task[]) {
    this.#tasks = newTasks;
  }
  set listeners(newListerners: Listener[]) {
    this.#listeners = newListerners;
  }

  setTasks(newTasks: Task[]) {
    this.#tasks = newTasks;
    this.notify();
  }

  subscribe(listener: Listener) {
    this.#listeners.push(listener);
  }

  notify() {
    this.#listeners.forEach((listener) => listener());
  }
}

export const tStore = new TasksStore();
tStore.subscribe(myListener);
